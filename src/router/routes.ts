import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/indexPage.vue') }],
  },
  {
    path: '/feed',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/feed.vue') }],
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
    path: '/onboarding/phone',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/onboarding/phone.vue') }],
  },
  {
    path: '/onboarding/otp',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/onboarding/otp.vue') }],
  },
  {
    path: '/onboarding/name',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/onboarding/name.vue') }],
  },
  {
    path: '/onboarding/area',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/onboarding/area.vue') }],
  },
  {
    path: '/onboarding/zone-type',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ path: '', component: () => import('pages/onboarding/zone-type.vue') }],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
