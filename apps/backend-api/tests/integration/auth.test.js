const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../../src/models/User');

describe('Auth API Integration Tests', () => {
  let testUser;
  let accessToken;
  let refreshToken;

  beforeAll(async () => {
    // Make sure we are connected to MongoDB before running tests
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected, waiting to reconnect...');
      await mongoose.disconnect();
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Connected to MongoDB for auth integration tests');
    }
    
    // Clear any existing test user
    await User.deleteMany({
      email: 'integration@example.com'
    });
    
    // Create a test user for auth tests
    testUser = new User({
      username: 'integrationtester',
      email: 'integration@example.com',
      password: await User.hashPassword('Integration123!'),
      firstName: 'Integration', // Adding required field
      lastName: 'Tester',      // Adding required field
      verified: true,
      loginAttempts: 0
    });

    await testUser.save();
    
    // Create test tokens for auth endpoints
    const JWT_SECRET = process.env.JWT_SECRET || 'test-jwt-secret';
    const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'test-jwt-refresh-secret';
    
    accessToken = jwt.sign({ userId: testUser._id, role: 'user' }, JWT_SECRET, { expiresIn: '1h' });
    refreshToken = jwt.sign({ userId: testUser._id }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
    
    console.log('Successfully created test tokens for auth integration tests');
  });

  afterAll(async () => {
    // Clean up test data
    if (mongoose.connection.readyState === 1) {
      await User.deleteMany({
        email: 'integration@example.com'
      });
    }
  });

  describe('POST /api/auth/register', () => {
    const newUser = {
      username: 'newuser',
      email: 'newuser@example.com',
      password: 'Newuser123!'
    };

    it('should register a new user successfully', async () => {
      const response = await testRequest
        .post('/api/auth/register')
        .send(newUser);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'User registered successfully');
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email', newUser.email);
      expect(response.body).toHaveProperty('tokens');
      expect(response.body.tokens).toHaveProperty('accessToken');
      expect(response.body.tokens).toHaveProperty('refreshToken');
    });

    it('should prevent registration with an existing email', async () => {
      // Try to register with the same email
      const response = await testRequest
        .post('/api/auth/register')
        .send(newUser);

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'User with this email already exists');
    });

    it('should validate required fields for registration', async () => {
      const response = await testRequest
        .post('/api/auth/register')
        .send({
          // Missing required fields
          username: 'incomplete'
        });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('POST /api/auth/login', () => {
    it('should login successfully with valid credentials', async () => {
      const response = await testRequest
        .post('/api/auth/login')
        .send({
          email: 'integration@example.com',
          password: 'Integration123!'
        });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'Login successful');
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email', 'integration@example.com');
      expect(response.body).toHaveProperty('tokens');
      
      // Save tokens for later tests
      accessToken = response.body.tokens.accessToken;
      refreshToken = response.body.tokens.refreshToken;
    });

    it('should reject login with invalid credentials', async () => {
      const response = await testRequest
        .post('/api/auth/login')
        .send({
          email: 'integration@example.com',
          password: 'WrongPassword123!'
        });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });
  });

  describe('POST /api/auth/refresh-token', () => {
    it('should refresh tokens with a valid refresh token', async () => {
      const response = await testRequest
        .post('/api/auth/refresh-token')
        .send({ refreshToken });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'Tokens refreshed successfully');
      expect(response.body).toHaveProperty('tokens');
      expect(response.body.tokens).toHaveProperty('accessToken');
      expect(response.body.tokens).toHaveProperty('refreshToken');

      // Update tokens for future tests
      accessToken = response.body.tokens.accessToken;
      refreshToken = response.body.tokens.refreshToken;
    });

    it('should reject an invalid refresh token', async () => {
      const response = await testRequest
        .post('/api/auth/refresh-token')
        .send({ refreshToken: 'invalid-token' });

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('GET /api/auth/me', () => {
    it('should get current user profile with valid token', async () => {
      const response = await testRequest
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${accessToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('user');
      expect(response.body.user).toHaveProperty('email', 'integration@example.com');
    });

    it('should reject unauthorized requests', async () => {
      const response = await testRequest
        .get('/api/auth/me');

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty('success', false);
    });
  });

  describe('POST /api/auth/logout', () => {
    it('should logout the user with a valid token and refresh token', async () => {
      const response = await testRequest
        .post('/api/auth/logout')
        .set('Authorization', `Bearer ${accessToken}`)
        .send({ refreshToken });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('message', 'Logout successful');
    });
  });
});

