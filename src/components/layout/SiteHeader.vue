<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import LogoThree from '@/components/LogoThree.vue';

const mobileOpen = ref(false);
const route = useRoute();
const { openQuote } = useQuoteModal();

const links = [
  { to: '/', label: 'Home', page: 'home' },
  { to: '/services', label: 'Services', page: 'services' },
  { to: '/portfolio', label: 'Portfolio', page: 'portfolio' },
  { to: '/b2b-lead-generation', label: 'B2B Growth', page: 'b2b' },
  { to: '/team', label: 'Team', page: 'team' },
  { to: '/blog', label: 'Blog', page: 'blog' },
  { to: '/testimonials', label: 'Testimonials', page: 'testimonials' },
  { to: '/contact', label: 'Contact', page: 'contact' }
];

function isActive(path) {
  if (path === '/') return route.path === '/';
  return route.path === path || route.path.startsWith(path + '/');
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
}
function closeMobile() {
  mobileOpen.value = false;
}
</script>

<template>
  <header id="main-header">
    <div class="header-inner">
      <RouterLink class="logo logo-with-3d" to="/" aria-label="Allied Axis — Home">
        <span class="logo-3d-wrap logo-3d-wrap--nav" aria-hidden="true">
          <LogoThree />
        </span>
      </RouterLink>
      <nav>
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          :class="{ active: isActive(l.to) }"
          >{{ l.label }}</RouterLink
        >
        <button type="button" class="nav-cta" @click="openQuote">Request a Quotation</button>
      </nav>
      <div
        id="hamburger"
        class="hamburger"
        :class="{ open: mobileOpen }"
        @click="toggleMobile"
      >
        <span /><span /><span />
      </div>
    </div>
  </header>
  <div id="mobile-nav" class="mobile-nav" :class="{ open: mobileOpen }">
    <RouterLink v-for="l in links" :key="l.to + 'm'" :to="l.to" @click="closeMobile">{{
      l.label
    }}</RouterLink>
  </div>
</template>
