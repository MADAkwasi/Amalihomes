import 'dotenv/config';

// dotenv loads all values as string `"true" | "false" | "3000" `
export const environment = {
  // Convert to string and compare to check for environment
  PRODUCTION: `${process.env['production']}` === 'true',
  // Convert to number
  SERVER_PORT: Number(`${process.env['SERVER_PORT']}`),
  STORY_BLOK_APIKEY: `${process.env['STORY_BLOK_APIKEY']}`,
};
