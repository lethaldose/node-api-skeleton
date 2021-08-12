import { PORT, NODE_ENV } from 'src/configuration';
import { getApp } from 'src/app';
import { logger, handleFinalError } from 'src/utils/logger';

const startServer = () => {
  try {
    const app = getApp();
    app.listen(PORT, () => {
      logger.info(`started server on http://localhost:${PORT} in ${NODE_ENV} mode`);
    });
  } catch (error) {
    logger.error('failed to start server');
    logger.error(error);
  }
};

process.on("unhandledRejection", (err) => {
  throw err;
});

process.on("uncaughtException", (err) => {
  handleFinalError(err);
});

startServer();
