import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pinoHttp from "pino-http";
import { logger } from "src/utils/logger";

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

  return app;
};
