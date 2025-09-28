const deepMerge = require('lodash/merge');

const ENVIRONMENT_LOCAL = {
  active: 'local',
};

module.exports = {
  pc: deepMerge(
    {
      loginConfig: {
        redirectUri: 'http://localhost:3000',
      },
    },
    ENVIRONMENT_LOCAL,
  ),
  mobile: deepMerge(
    {
      vconsole: true,
      loginConfig: {
        redirectUri: 'http://localhost:3001',
      },
    },
    ENVIRONMENT_LOCAL,
  )
}[process.env.APP_TYPE];
