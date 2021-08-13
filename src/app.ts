import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from 'pino-http';
import { logger } from './utils/logger';
import { customerRouter } from './customer/customer-controller';
import errorHandlerMiddleware from './middleware/error-handler';

export const getApp = () => {
  const app = express();
  app.use(helmet());
  app.use(cors());
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(pinoHttp({ logger }));

  app.get('/api/v1/health-check', (_, res) => {
    res.json({ ok: true });
  });

  app.use('/api/v1/customers', customerRouter);
  app.use(errorHandlerMiddleware);

  return app;
};
