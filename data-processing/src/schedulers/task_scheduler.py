"""
Task scheduler for automated data processing
"""

import asyncio
import schedule
import time
from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.executors.asyncio import AsyncIOExecutor
from apscheduler.triggers.interval import IntervalTrigger


from ..processors import (
    CryptoDataProcessor,
    NewsProcessor,
    PortfolioProcessor,
    StarkNetProcessor,
)
from ..config.database import DatabaseConfig
from ..utils.logger import setup_logger


logger = setup_logger(__name__)


class TaskScheduler:
    """Task scheduler for automated processing"""

    def __init__(
        self,
        crypto_processor: CryptoDataProcessor,
        news_processor: NewsProcessor,
        portfolio_processor: PortfolioProcessor,
        starknet_processor: StarkNetProcessor,
        db_config: DatabaseConfig,
    ):
        self.crypto_processor = crypto_processor
        self.news_processor = news_processor
        self.portfolio_processor = portfolio_processor
        self.starknet_processor = starknet_processor
        self.db_service = db_config

        self.scheduler = AsyncIOScheduler(
            jobstores={
                "default": SQLAlchemyJobStore(engine=self.db_service.engine())
            },
            executors={"default": AsyncIOExecutor()},
            job_defaults={"coalesce": False, "max_instances": 1},
            timezone="UTC",
        )
        self.running = False

    def setup_schedules(self):
        """Setup scheduled tasks with APScheduler"""
        logger.info("Setting up scheduled tasks")

        self._add_job(
            self.crypto_processor.update_prices, minutes=5, job_id="update_prices"
        )
        self._add_job(
            self.news_processor.fetch_crypto_news, minutes=30, job_id="fetch_news"
        )
        self._add_job(
            self.portfolio_processor.update_portfolio_values,
            minutes=10,
            job_id="update_portfolio",
        )
        self._add_job(
            self.starknet_processor.monitor_network_metrics,
            minutes=5,
            job_id="monitor_starknet",
        )

    def _add_job(self, coro_func, *, minutes: int, job_id: str):
        """Adds an async job to the scheduler with an interval trigger"""
        self.scheduler.add_job(
            func=self._run_async_job,
            args=[coro_func],
            trigger=IntervalTrigger(minutes=minutes),
            id=job_id,
            replace_existing=True,
        )

    @staticmethod
    async def _run_async_job(coro_func):
        """Runs an async job"""
        try:
            await coro_func()
        except Exception as e:
            logger.error(f"Error running job {coro_func.__name__}: {e}")

    def start(self):
        """Start the scheduler"""
        logger.info("Starting APScheduler")
        self.setup_schedules()
        self.scheduler.start()
        logger.info("APScheduler started")

    def shutdown(self):
        """Stop the scheduler gracefully"""
        self.scheduler.shutdown(wait=True)
        logger.info("Shutting down APScheduler")
