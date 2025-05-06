import { environment as ENV } from './env';

//NOTE:  All environment variables are loaded as string values `"boolean" | "number" `
export const environment = {
  production: ENV.production === 'true',
  STORY_BLOK_APIKEY: ENV.STORY_BLOK_APIKEY,
  GTM_KEY: ENV.GTM_KEY,
  SERVER_URL: ENV.SERVER_URL,
  TAWK_TO_KEY: ENV.TAWK_API_KEY,
};
