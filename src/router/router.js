import App from '../App.vue';
import { createRouter, createWebHistory  } from 'vue-router';
import { createApp } from 'vue';

import Home from '../views/Home.vue';
import DivulgarProduto from '../views/DivulgarProduto.vue';
import MeusImoveis from '../views/MeusImoveis.vue';
import PageInitial from '../views/initialPage.vue';

const routes = [
  {
    path: '/',
    name: 'Pageinitil',
    component: PageInitial,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/meusimoveis',
    name: 'MeusImoveis',
    component: MeusImoveis,
  },
  {
    path: '/divulgarproduto',
    name: 'DivulgarProduto',
    component: DivulgarProduto
  }
];
const router = createRouter({
  history: createWebHistory (),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router;
