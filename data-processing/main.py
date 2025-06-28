#!/usr/bin/env python3
"""
StarkPulse Data Processing Module

Main entry point for data processing operations including:
- Crypto data aggregation
- News feed processing
- Portfolio analytics
- StarkNet blockchain data processing
"""

import asyncio
import os
import sys
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Optional

# Add the current directory to Python path
sys.path.append(str(Path(__file__).parent / 'src'))

from src.config.settings import Settings
from src.config.database import DatabaseConfig
from src.services.database_service import DatabaseService
from src.services.cache_service import CacheService
from src.processors import (
    CryptoDataProcessor, 
    NewsProcessor, 
    PortfolioProcessor, 
    StarkNetProcessor
)
from src.schedulers.task_scheduler import TaskScheduler
from src.utils.logger import setup_logger

# Initialize logger
logger = setup_logger(__name__)

async def main():
    """
    Main function to run data processing operations
    """
    logger.info("Starting StarkPulse Data Processing...")
    
    try:
        # Initialize configuration
        settings = Settings()
        settings.validate()
        
        # Initialize database
        db_config = DatabaseConfig(settings)
        db_service = DatabaseService(db_config)
        
        # Initialize cache
        cache_service = CacheService(settings)
        
        # Initialize processors
        crypto_processor = CryptoDataProcessor(db_service, cache_service)
        news_processor = NewsProcessor(db_service, cache_service)
        portfolio_processor = PortfolioProcessor(db_service, cache_service)
        starknet_processor = StarkNetProcessor(settings, db_service, cache_service)
        
        # Run initial data processing
        logger.info("Running initial data processing...")
        
        await crypto_processor.update_prices()
        await news_processor.fetch_crypto_news()
        await portfolio_processor.update_portfolio_values()
        await starknet_processor.monitor_network_metrics()
        
        logger.info("Initial data processing completed")
        
        # Setup and start scheduler
        scheduler = TaskScheduler(
            crypto_processor,
            news_processor, 
            portfolio_processor,
            starknet_processor,
            db_config
        )
        
        scheduler.start()
        
        logger.info("Data processing setup completed successfully")
        
    except Exception as e:
        logger.error(f"Error in data processing: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())
