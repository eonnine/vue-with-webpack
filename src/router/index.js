import { createRouter, createWebHistory } from 'vue-router';

import { useGuards } from './navigationGuards';
import routes from './routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

useGuards(router);

export { routes, router };
