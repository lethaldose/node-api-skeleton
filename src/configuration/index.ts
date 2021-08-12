import { config } from 'dotenv';

config();

export const PORT: string = process.env.APP_PORT;
export const NODE_ENV: string = process.env.NODE_ENV;
export const isProduction: boolean = process.env.NODE_ENV === 'production';