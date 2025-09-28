import type {ConfigModel} from '@pinecore/common/models/config.model';

const routes: ConfigModel['routes'] = [
  {path: '/404', component: '@/pages/404'},
  {
    path: '/',
    component: '@/layouts/HeaderLayout/index',
    routes: [
      {path: '', redirect: '/start'},
      {path: 'start', component: '@/pages/index'},
    ],
  },
  {path: '*', redirect: '/404'},
];

export default routes;
