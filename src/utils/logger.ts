import pino from "pino";
import { isProduction } from 'src/configuration';

const logger = pino({
  level: isProduction ? 'info' : 'debug',
  prettyPrint: !isProduction,
});

const handleFinalError = pino.final(logger, (err, finalLogger) => {
  finalLogger.fatal(err);
  process.exitCode = 1;
  process.kill(process.pid, "SIGTERM");
});

export {logger, handleFinalError};
