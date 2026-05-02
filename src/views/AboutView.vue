<script setup>
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';
import { useQuoteModal } from '@/composables/useQuoteModal.js';

useHead({
  title: 'About – Allied Axis | Complete Digital Ecosystems',
  meta: [
    {
      name: 'description',
      content:
        'AI-Powered Digital Growth Agency. From zero to revenue-ready. UAE · UK · Pakistan. End-to-end launch, AI marketing, and lead systems.'
    }
  ]
});

const { openQuote } = useQuoteModal();
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">About</div>
          <h1 class="section-title">Allied Axis – Complete Digital Ecosystems</h1>
          <p class="section-sub">
            AI-Powered Digital Growth Agency. From zero to revenue-ready. We build systems that generate qualified leads and turn your brand into a
            client-attracting machine — across UAE, UK, and Pakistan.
          </p>
        </div>

        <div class="section-header center fade-in" style="margin-top: 48px">
          <div class="section-label">What We Do</div>
          <h2 class="section-title">From Zero to Revenue-Ready</h2>
          <p class="section-sub">Every service is engineered to solve a real business problem – not just look good.</p>
        </div>
        <div class="grid-3">
          <RouterLink to="/services" class="glass-card fade-in about-card-link">
            <div class="card-icon">🚀</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 10px">Digital Launch Strategy</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              Complete brand identity, website, and go-to-market plan. From domain to your first paying client.
            </p>
            <div class="case-link" style="margin-top: 16px">Explore Services →</div>
          </RouterLink>
          <RouterLink to="/services" class="glass-card fade-in about-card-link">
            <div class="card-icon">🤖</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 10px">AI Marketing Automation</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              20% efficiency gains and 3× content output using AI-powered workflows. Work smarter, not harder.
            </p>
            <div class="case-link" style="margin-top: 16px">Explore Services →</div>
          </RouterLink>
          <RouterLink to="/b2b-lead-generation" class="glass-card fade-in about-card-link">
            <div class="card-icon">🎯</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 10px">Lead Generation Systems</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              500+ qualified leads per week through AI-powered LinkedIn outreach, verified lists, and automated sequences.
            </p>
            <div class="case-link" style="margin-top: 16px">Explore B2B →</div>
          </RouterLink>
        </div>

        <div class="section-header center fade-in" style="margin-top: 48px; padding-top: 8px">
          <div class="section-label">Why Allied Axis</div>
          <h2 class="section-title">Built Different. Proven Results.</h2>
        </div>
        <div class="grid-4">
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px">⚡</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">Fast Execution</h4>
            <p style="color: var(--muted); font-size: 0.85rem">Ready to launch in weeks, not months.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px">🤖</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">AI-Powered Systems</h4>
            <p style="color: var(--muted); font-size: 0.85rem">Automation at scale – not traditional marketing.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px">🔗</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">End-to-End Solution</h4>
            <p style="color: var(--muted); font-size: 0.85rem">No freelancers needed – complete ecosystem.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px">🌍</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">International Experience</h4>
            <p style="color: var(--muted); font-size: 0.85rem">UAE, UK, Pakistan – 3+ years proven results.</p>
          </div>
        </div>

        <div style="text-align: center; margin-top: 48px" class="fade-in">
          <button type="button" class="btn-primary" @click="openQuote">Start Your Journey →</button>
        </div>

        <div class="glass-card fade-in" style="margin-top: 56px; text-align: center; max-width: 720px; margin-left: auto; margin-right: auto">
          <p style="color: var(--muted); line-height: 1.8; margin-bottom: 16px">
            Want the people behind the work? Meet our leadership and team on the Team page.
          </p>
          <RouterLink to="/team" class="btn-secondary" style="text-decoration: none; display: inline-block">Meet the Team →</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  transition: transform 0.2s;
}

.about-card-link:hover {
  transform: translateY(-2px);
}
</style>
