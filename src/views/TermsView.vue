<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container" style="max-width: 800px">
        <h1 class="section-title fade-in" style="margin-bottom: 1rem">Terms of Service</h1>
        <p class="fade-in" style="color: var(--muted); margin-bottom: 2rem">Last updated: May 2, 2026</p>
        <div class="glass-card fade-in" style="margin-bottom: 1.5rem">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">Services</h2>
          <p style="color: var(--muted); line-height: 1.7">
            Allied Axis provides digital strategy, creative, web, and marketing services as described in
            proposals or statements of work. Fees, timelines, and deliverables are governed by the
            agreement you sign with us.
          </p>
        </div>
        <div class="glass-card fade-in" style="margin-bottom: 1.5rem">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">Website use</h2>
          <p style="color: var(--muted); line-height: 1.7">
            Content on this site is for general information. We may update the site or these terms;
            continued use means you accept the current version. You agree not to misuse the site or
            attempt unauthorized access.
          </p>
        </div>
        <div class="glass-card fade-in">
          <h2 class="section-title" style="font-size: 1.35rem; margin-bottom: 0.75rem">Limitation &amp; law</h2>
          <p style="color: var(--muted); line-height: 1.7">
            To the extent permitted by law, Allied Axis is not liable for indirect or consequential
            damages arising from site use. Governing law and venue follow the terms in your service
            contract, or otherwise the laws of the United Arab Emirates unless otherwise agreed in
            writing.
          </p>
        </div>
        <p style="margin-top: 2rem; font-size: 0.9rem">
          <RouterLink to="/">Home</RouterLink> · <RouterLink to="/contact">Contact</RouterLink> ·
          <RouterLink to="/privacy-policy">Privacy</RouterLink>
        </p>
      </div>
    </section>
  </div>
</template>
