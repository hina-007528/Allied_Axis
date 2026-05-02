import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Allied Axis – AI-Powered Digital Growth Agency | UAE, UK, Pakistan',
      description:
        'Allied Axis is an AI-powered digital growth agency helping brands in UAE, UK & Pakistan with AI marketing, lead generation & complete digital ecosystems.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Services – Allied Axis',
      description: 'Digital launch packages, retainers, AI marketing, and lead generation.'
    }
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue'),
    meta: { title: 'Portfolio – Allied Axis', description: 'Case studies and client results.' }
  },
  {
    path: '/pricing',
    redirect: { path: '/services', hash: '#pricing' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: { title: 'Contact – Allied Axis', description: 'Request a quotation or strategy call.' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About – Allied Axis | Complete Digital Ecosystems',
      description:
        'AI-Powered Digital Growth Agency. From zero to revenue-ready. UAE · UK · Pakistan. What we do and why Allied Axis.'
    }
  },
  {
    path: '/privacy-policy',
    alias: ['/privacy'],
    name: 'privacy',
    component: () => import('@/views/PrivacyView.vue'),
    meta: { title: 'Privacy Policy – Allied Axis', description: 'Privacy policy.' }
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/views/TermsView.vue'),
    meta: { title: 'Terms – Allied Axis', description: 'Terms of service.' }
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/views/FaqView.vue'),
    meta: { title: 'FAQ – Allied Axis', description: 'Frequently asked questions.' }
  },
  {
    path: '/b2b-lead-generation',
    name: 'b2b',
    component: () => import('@/views/B2BView.vue'),
    meta: { title: 'B2B Lead Generation – Allied Axis', description: 'B2B growth systems.' }
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/TeamView.vue'),
    meta: { title: 'Team – Allied Axis', description: 'Meet the Allied Axis team.' }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue'),
    meta: { title: 'Blog – Allied Axis', description: 'Insights and updates.' }
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: () => import('@/views/TestimonialsView.vue'),
    meta: { title: 'Testimonials – Allied Axis', description: 'Client testimonials.' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page Not Found – Allied Axis', description: 'This page could not be found.' }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    if (savedPosition) return savedPosition;
    return { top: 0 };
  }
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Allied Axis';
});

export default router;
