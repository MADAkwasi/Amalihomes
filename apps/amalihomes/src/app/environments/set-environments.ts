const setEnv = (): void => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPathProd = './apps/amalihomes/src/app/environments/environment.ts';
  const targetPathDev = './apps/amalihomes/src/app/environments/environment.development.ts';
  // Load node modules
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('dotenv').config({
    path: '.env',
  });
  const envConfigFileProd = `export const environment = {
      production: true,
      STORY_BLOK_APIKEY: '${process.env['STORY_BLOK_APIKEY']}',
      GTM_KEY: '${process.env['GTM_KEY']}',
        };`;
  const envConfigFileDev = `export const environment = {
      production: false,
      STORY_BLOK_APIKEY: '${process.env['STORY_BLOK_APIKEY']}',
      GTM_KEY: '${process.env['GTM_KEY']}',
    };`;
  writeFile(targetPathDev, envConfigFileDev, () => {
    console.log(envConfigFileDev);
  });
  writeFile(targetPathProd, envConfigFileProd, () => {
    console.log(envConfigFileProd);
  });
};

setEnv();
