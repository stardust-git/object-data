const ENVIRONMENT_PROD = require('./environment.prod');
const ENVIRONMENT_LOCAL = require('./environment.local');
import set from 'lodash/set';
import get from 'lodash/get';
import {docCookies} from '../utils/cookie.util';

type environmentType = typeof ENVIRONMENT_LOCAL & typeof ENVIRONMENT_PROD;


const env = () => {
  const configMap = {} as environmentType;

  // 从cookie中取出待设置的环境变量；
  window.document.cookie
    .split('; ')
    .filter((str) => str.startsWith('ENV__'))
    .map((str) => str.replace('ENV__', ''))
    .forEach((str) => {
      configMap[str.split('=')[0]] = str.split('=')[1];
    });

  // 通过cookie中环境变量的active决定使用哪一套环境变量，如果没有配置则使用打包中process.env的环境变量
  const curEnv =
    {
      [ENVIRONMENT_PROD.active]: ENVIRONMENT_PROD,
      [ENVIRONMENT_LOCAL.active]: ENVIRONMENT_LOCAL
    }[configMap?.active || process.env.APP_ENV];

  console.log('environment', curEnv);

  // 通过cookie中的环境变量进行动态更新
  if (configMap) {
    Object.keys(configMap).forEach((key) => {
      const valueType = typeof get(curEnv, key);
      set(
        curEnv,
        key,
        valueType === 'number'
          ? Number(configMap[key])
          : valueType === 'boolean'
            ? Boolean(configMap[key])
            : configMap[key],
      );
      docCookies.removeRecursively(`ENV__${key}`, undefined, location.hostname);
    });
  }

  return curEnv as environmentType;
};

export const environment: environmentType = env();
