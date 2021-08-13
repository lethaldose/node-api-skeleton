import pino from 'pino';
import { LOG_LEVEL, isProduction } from '../configuration';

const logger = pino({
  level: LOG_LEVEL,
  prettyPrint: !isProduction,
});

const handleFinalError = pino.final(logger, (err, finalLogger) => {
  finalLogger.fatal(err);
  process.exitCode = 1;
  process.kill(process.pid, 'SIGTERM');
});

export { logger, handleFinalError };
