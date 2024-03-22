import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/user',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/FrontView/HomeView.vue'),
      },
      {
        path: 'about',
        component: () => import('../views/FrontView/AboutView.vue'),
      },
      {
        path: 'merchandise',
        component: () => import('../views/FrontView/UserMerchandiseView.vue'),
      },
      {
        path: 'product/:id',
        component: () => import('../views/FrontView/UserProductView.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/FrontView/CheckOutView.vue'),
      },
      {
        path: 'orderOut',
        component: () => import('../views/FrontView/CheckOutView2.vue'),
      },
      {
        path: 'userOut/:id',
        component: () => import('../views/FrontView/UserOrderView.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/AdminView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Background/AdminProductsView.vue'),
      },
      {
        path: 'order',
        component: () => import('../views/Background/AdminOrderView.vue'),
      },
      {
        path: 'voucher',
        component: () => import('../views/Background/AdminVoucherView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
