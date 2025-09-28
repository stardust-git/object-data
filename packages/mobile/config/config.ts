import {defineConfig} from '@umijs/max';
import routes from './routes';

export default defineConfig({
  define: {
    'process.env': {
      APP_TYPE: process.env.APP_TYPE,
      APP_ENV: process.env.UMI_ENV,
    }
  },
  layout: false,
  routes, // 开始配置式路由
  title: '松果umi-mobile',
  history: { // 路由类型
    type: 'browser',
  },
  mfsu: false
  // model: {},  开启 useModel
});
