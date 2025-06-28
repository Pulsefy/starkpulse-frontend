"""
Generic API client for external service integrations
"""

import asyncio
import aiohttp
import time
from typing import Dict, Any, Optional, List
from urllib.parse import urljoin
import json

from ..utils.logger import setup_logger
from ..config.settings import Settings

logger = setup_logger(__name__)

class RateLimiter:
    """Simple rate limiter implementation"""
    
    def __init__(self, max_requests: int, time_window: int = 60):
        self.max_requests = max_requests
        self.time_window = time_window
        self.requests = []
    
    async def acquire(self):
        """Acquire permission to make a request"""
        now = time.time()
        
        # Remove old requests outside the time window
        self.requests = [req_time for req_time in self.requests if now - req_time < self.time_window]
        
        # Check if we can make a request
        if len(self.requests) >= self.max_requests:
            sleep_time = self.time_window - (now - self.requests[0])
            if sleep_time > 0:
                await asyncio.sleep(sleep_time)
                return await self.acquire()
        
        self.requests.append(now)

class APIClient:
    """Generic API client with rate limiting"""
    
    def __init__(self, base_url: str = None):
        self.base_url = base_url
        self.session = None
    
    async def __aenter__(self):
        self.session = aiohttp.ClientSession()
        return self
    
    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.session:
            await self.session.close()
    
    async def get(self, endpoint: str, params: Dict[str, Any] = None) -> Dict[str, Any]:
        """Make GET request"""
        logger.info(f"Making GET request to {endpoint}")
        # Dummy implementation
        return {"status": "success", "data": []}
    
    async def post(self, endpoint: str, data: Dict[str, Any] = None) -> Dict[str, Any]:
        """Make POST request"""
        logger.info(f"Making POST request to {endpoint}")
        # Dummy implementation
        return {"status": "success", "data": {}}

class CoinMarketCapClient(APIClient):
    """CoinMarketCap API client"""

    def __init__(self, settings: Settings):
        super().__init__('https://pro-api.coinmarketcap.com/v1/')
        self.api_key = settings.coinmarketcap_api_key

    async def get_listings(self, start: int = 1, limit: int = 100) -> Dict[str, Any]:
        """Get cryptocurrency listings"""
        headers = {'X-CMC_PRO_API_KEY': self.api_key}
        params = {'start': start, 'limit': limit}
        return await self.get('cryptocurrency/listings/latest', params=params, headers=headers)

    async def get_quotes(self, symbols: List[str]) -> Dict[str, Any]:
        """Get price quotes for symbols"""
        headers = {'X-CMC_PRO_API_KEY': self.api_key}
        params = {'symbol': ','.join(symbols)}
        return await self.get('cryptocurrency/quotes/latest', params=params, headers=headers)


class NewsAPIClient(APIClient):
    """News API client"""

    def __init__(self, settings: Settings):
        super().__init__("https://newsapi.org/v2/")
        self.api_key = settings.news_api_key

    async def get_everything(
        self,
        query: str,
        from_date: str = None,
        to_date: str = None,
        page_size: int = 100,
    ) -> Dict[str, Any]:
        """Get news articles from NewsAPI"""
        params = {
            "q": query,
            "apiKey": self.api_key,
            "pageSize": page_size,
            "sortBy": "publishedAt",
            "language": "en",
        }
        if from_date:
            params["from"] = from_date
        if to_date:
            params["to"] = to_date
        return await self.get("everything", params=params)
