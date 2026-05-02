<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container" style="max-width: 800px">
        <h1 class="section-title fade-in" style="margin-bottom: 1rem">Privacy Policy</h1>
        <p class="fade-in" style="color: var(--muted); margin-bottom: 2rem">Last updated: May 2, 2026</p>
        <div class="glass-card fade-in" style="margin-bottom: 1.5rem">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">Information we collect</h2>
          <p style="color: var(--muted); line-height: 1.7">
            We collect information you submit through forms (name, email, company, message), basic usage
            data from our site, and communication preferences. Netlify may process form submissions on
            our behalf.
          </p>
        </div>
        <div class="glass-card fade-in" style="margin-bottom: 1.5rem">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">How we use information</h2>
          <p style="color: var(--muted); line-height: 1.7">
            We use your data to respond to inquiries, deliver services, improve our website, and comply
            with legal obligations. We do not sell personal information.
          </p>
        </div>
        <div class="glass-card fade-in">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">Your rights &amp; contact</h2>
          <p style="color: var(--muted); line-height: 1.7">
            You may request access, correction, or deletion of your data by emailing
            <a href="mailto:info@alliedaxis.digital">info@alliedaxis.digital</a>. We use cookies as
            described in our cookie banner; you can change browser settings to limit cookies.
          </p>
        </div>
        <p style="margin-top: 2rem; font-size: 0.9rem">
          <RouterLink to="/">Home</RouterLink> · <RouterLink to="/contact">Contact</RouterLink> ·
          <RouterLink to="/terms">Terms</RouterLink>
        </p>
      </div>
    </section>
  </div>
</template>
