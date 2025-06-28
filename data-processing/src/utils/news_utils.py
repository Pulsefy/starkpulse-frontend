from datetime import datetime, timedelta
from textblob import TextBlob 

TOPIC_KEYWORDS = {
    "DeFi": ["defi", "liquidity pool", "yield farming"],
    "NFTs": ["nft", "non-fungible", "digital art"],
    "Layer2": ["layer2", "rollup", "optimism", "arbitrum", "zk-rollup", "starknet"],
    "Bitcoin": ["bitcoin", "btc"],
    "Ethereum": ["ethereum", "eth"],
    "Regulation": ["regulation", "sec", "lawsuit", "banned", "compliance"],
}


def classify_topic(text: str) -> str:
    text = text.lower()
    for topic, keywords in TOPIC_KEYWORDS.items():
        if any(k in text for k in keywords):
            return topic
    return "General"


def get_sentiment(text: str) -> float:
    try:
        return round(TextBlob(text).sentiment.polarity, 3)  # -1 to 1
    except Exception:
        return 0.0
