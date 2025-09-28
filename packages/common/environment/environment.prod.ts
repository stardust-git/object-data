const deepMerge = require('lodash/merge');

const ENVIRONMENT_PROD = {
  active: 'prod',
};

module.exports = {
  pc: deepMerge(
    {
      loginConfig: {
        redirectUri: 'http://localhost:3000',
      },
    },
    ENVIRONMENT_PROD,
  ),
  mobile: deepMerge(
    {
      vconsole: false,
      loginConfig: {
        redirectUri: 'http://localhost:3001',
      },
    },
    ENVIRONMENT_PROD,
  )
}[process.env.APP_TYPE];
