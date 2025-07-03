const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const searchService = require('../services/searchService');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [2, "First name must be at least 2 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
      match: [
        /^[a-zA-Z\s]+$/,
        "First name can only contain letters and spaces",
      ],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      minlength: [2, "Last name must be at least 2 characters"],
      maxlength: [50, "Last name cannot exceed 50 characters"],
      match: [/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    preferences: {
      newsletter: {
        type: Boolean,
        default: false,
      },
      notifications: {
        type: Boolean,
        default: true,
      },
      theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },
      language: {
        type: String,
        enum: ["en", "es", "fr", "de"],
        default: "en",
      },
    },
    privacy: {
      profileVisible: {
        type: Boolean,
        default: true,
      },
      dataProcessing: {
        type: Boolean,
        default: true,
        required: true,
      },
      marketing: {
        type: Boolean,
        default: false,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: {
      type: String,
      select: false,
    },
    emailVerificationExpires: {
      type: Date,
      select: false,
    },
    passwordResetToken: {
      type: String,
      select: false,
    },
    passwordResetExpires: {
      type: Date,
      select: false,
    },
    lastLogin: {
      type: Date,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lockUntil: {
      type: Date,
    },
    refreshTokens: [
      {
        token: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
        expiresAt: {
          type: Date,
          required: true,
        },
        deviceInfo: {
          type: String,
          default: "Unknown Device",
        },
      },
    ],
    passwordChangedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.password;
        delete ret.passwordResetToken;
        delete ret.passwordResetExpires;
        delete ret.emailVerificationToken;
        delete ret.emailVerificationExpires;
        delete ret.__v;
        return ret;
      },
    },
  }
);

// ==========================
// Indexes
// ==========================
userSchema.index({ passwordResetToken: 1 });
userSchema.index({ emailVerificationToken: 1 });

// ==========================
// Virtual for account lock status
// ==========================
userSchema.virtual("isLocked").get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// ==========================
// Pre-save middleware to hash password and track password changes
// ==========================
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    if (!this.isNew) {
      this.passwordChangedAt = new Date();
    }

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// ==========================
// Method to compare password
// ==========================
userSchema.methods.comparePassword = async function (candidatePassword) {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

// ==========================
// Method to handle failed login attempts
// ==========================
userSchema.methods.incLoginAttempts = function () {
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return this.updateOne({
      $unset: { lockUntil: 1 },
      $set: { loginAttempts: 1 },
    });
  }

  const updates = { $inc: { loginAttempts: 1 } };
  if (this.loginAttempts + 1 >= 5 && !this.isLocked) {
    updates.$set = { lockUntil: Date.now() + 2 * 60 * 60 * 1000 };
  }

  return this.updateOne(updates);
};

// ==========================
// Method to reset login attempts
// ==========================
userSchema.methods.resetLoginAttempts = function () {
  return this.updateOne({
    $unset: { loginAttempts: 1, lockUntil: 1 },
  });
};

// ==========================
// Method to generate password reset token
// ==========================
userSchema.methods.createPasswordResetToken = function () {
  const crypto = require("crypto");
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour

  return resetToken;
};

// ==========================
// Method to generate email verification token
// ==========================
userSchema.methods.createEmailVerificationToken = function () {
  const crypto = require("crypto");
  const verificationToken = crypto.randomBytes(32).toString("hex");

  this.emailVerificationToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");
  this.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

  return verificationToken;
};

// ==========================
// Method to add refresh token
// ==========================
userSchema.methods.addRefreshToken = function (
  token,
  expiresAt,
  deviceInfo = "Unknown Device"
) {
  this.refreshTokens.push({
    token,
    expiresAt,
    deviceInfo,
  });

  // ==========================
  // Keep only last 5 refresh tokens per user
  // ==========================
  if (this.refreshTokens.length > 5) {
    this.refreshTokens = this.refreshTokens.slice(-5);
  }

  return this.save();
};

// ==========================
// Method to remove refresh token
// ==========================
userSchema.methods.removeRefreshToken = function (token) {
  this.refreshTokens = this.refreshTokens.filter((rt) => rt.token !== token);
  return this.save();
};

// ==========================
// Method to remove all refresh tokens
// ==========================
userSchema.methods.removeAllRefreshTokens = function () {
  this.refreshTokens = [];
  return this.save();
};

// ==========================
// Method to clean expired refresh tokens
// ==========================
userSchema.methods.cleanExpiredRefreshTokens = function () {
  const now = new Date();
  this.refreshTokens = this.refreshTokens.filter((rt) => rt.expiresAt > now);
  return this.save();
};

// ==========================
// Method to check if refresh token exists and is valid
// ==========================
userSchema.methods.hasValidRefreshToken = function (token) {
  const now = new Date();
  return this.refreshTokens.some(
    (rt) => rt.token === token && rt.expiresAt > now
  );
};

// Index to Elasticsearch after save
userSchema.post('save', async function(doc) {
  await searchService.indexDocument('users', doc._id.toString(), doc.toObject());
});

// Remove from Elasticsearch after delete
userSchema.post('remove', async function(doc) {
  const esClient = require('../config/elasticsearch');
  await esClient.delete({ index: 'users', id: doc._id.toString() }).catch(() => {});
});

module.exports = mongoose.model("User", userSchema);
