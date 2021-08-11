import { config } from 'dotenv';

config();

export const PORT: string = process.env.APP_PORT;
