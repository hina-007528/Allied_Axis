<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';

useHead({
  title: 'Page Not Found – Allied Axis',
  meta: [
    {
      name: 'description',
      content: 'This page could not be found. Return to Allied Axis home or contact us for help.'
    }
  ]
});
</script>

<template>
  <div class="page">
    <section class="section not-found-section">
      <div class="container not-found-inner">
        <div class="not-found-illustration fade-in" aria-hidden="true">404</div>
        <h1 class="section-title fade-in" style="font-size: 2.5rem; text-align: center">This page isn’t here</h1>
        <p class="section-sub fade-in not-found-copy">
          The link may be broken or the page may have moved. Head back to the homepage, explore services, or reach out — we respond within 24 hours.
        </p>
        <div class="not-found-actions fade-in">
          <RouterLink class="btn-primary hero-cta-pulse" to="/">Back to home →</RouterLink>
          <RouterLink class="btn-secondary" to="/contact">Contact us</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.not-found-section {
  min-height: 60vh;
  display: flex;
  align-items: center;
}

.not-found-inner {
  text-align: center;
}

.not-found-copy {
  margin: 0 auto 2rem;
  max-width: 480px;
}

.not-found-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  align-items: center;
}

.not-found-actions a {
  text-decoration: none;
  display: inline-block;
}

.not-found-illustration {
  font-family: Poppins, sans-serif;
  font-weight: 900;
  font-size: clamp(4rem, 14vw, 7rem);
  line-height: 1;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, var(--blue), var(--navy));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: -0.06em;
  filter: drop-shadow(0 12px 28px rgba(35, 43, 92, 0.12));
}
</style>
