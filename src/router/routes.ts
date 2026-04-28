import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/schedule',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/schedule.vue') }],
  },
  {
    path: '/report',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/report.vue') }],
  },
  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [{ path: '', component: () => import('pages/profile.vue') }],
  },
  {
    path: '/notification-settings',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/settings/notifications.vue') }],
  },
  {
    path: '/profile-settings',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/settings/profile.vue') }],
  },
  {
    path: '/privacy-policy',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/policy.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
