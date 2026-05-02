<script setup>
import { RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import { ref } from 'vue';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';

useHead({
  title: 'B2B Lead Generation & AI Marketing Agency UAE – Allied Axis',
  meta: [
    {
      name: 'description',
      content:
        'Generate 500+ qualified B2B leads per week using AI-powered LinkedIn outreach. 6+ global markets. Free B2B audit available.'
    }
  ]
});

const { openQuote } = useQuoteModal();

const formRef = ref(null);
const ok = ref('');
const err = ref('');
const busy = ref(false);

async function onSubmit() {
  ok.value = '';
  err.value = '';
  const form = formRef.value;
  if (!form) return;
  busy.value = true;
  try {
    const res = await submitNetlifyForm(form, '/');
    if (res.ok) {
      ok.value = 'Thanks — we received your message and will reply within 24 hours.';
      form.reset();
    } else if (res.error) {
      err.value = res.error;
      res.field?.focus();
    } else err.value = 'Something went wrong. Please email info@alliedaxis.digital.';
  } finally {
    busy.value = false;
  }
}
</script>

<template>
  <div class="page">
    <section class="hero" style="background: linear-gradient(135deg, rgba(35, 43, 92, 0.03), rgba(224, 92, 38, 0.05))">
      <div class="container">
        <div
          class="hero-layout"
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
          "
        >
          <div class="hero-label fade-in">🎯 B2B Lead Generation</div>
          <h1 class="fade-in" style="font-size: clamp(2rem, 5vw, 3.5rem); line-height: 1.1; font-weight: 900; margin-bottom: 20px">
            Turn Your Pipeline into <span style="color: var(--blue)">Revenue</span>
          </h1>
          <p class="fade-in" style="font-size: 1.1rem; color: var(--muted); margin-bottom: 30px; line-height: 1.8">
            Struggling with long sales cycles and poor targeting? We generate 500+ qualified B2B leads per week using AI-powered
            outreach across global markets.
          </p>
          <div class="btn-group fade-in" style="justify-content: center; margin-bottom: 50px">
            <button type="button" class="btn-primary" @click="openQuote">Get Qualified Leads →</button>
            <RouterLink to="/portfolio" class="btn-secondary">View Case Studies</RouterLink>
          </div>
          <div class="stats-row fade-in" style="justify-content: center">
            <div class="stat-item" style="text-align: center">
              <div class="stat-num" style="font-family: Poppins, sans-serif; font-size: 2.5rem; font-weight: 900; color: var(--blue)">
                500+
              </div>
              <div style="font-size: 0.85rem; color: var(--muted)">Leads Per Week</div>
            </div>
            <div class="stat-item" style="text-align: center">
              <div class="stat-num" style="font-family: Poppins, sans-serif; font-size: 2.5rem; font-weight: 900; color: var(--blue)">
                80%
              </div>
              <div style="font-size: 0.85rem; color: var(--muted)">Time Saved</div>
            </div>
            <div class="stat-item" style="text-align: center">
              <div class="stat-num" style="font-family: Poppins, sans-serif; font-size: 2.5rem; font-weight: 900; color: var(--blue)">
                6+
              </div>
              <div style="font-size: 0.85rem; color: var(--muted)">Global Markets</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Our Services</div>
          <h2 class="section-title">B2B Growth Services</h2>
        </div>
        <div class="grid-2 fade-in" style="gap: 24px">
          <div class="glass-card">
            <div class="card-icon">🎯</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 12px">Lead Generation System</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              Weekly prospect lists, verified contact data, outreach templates, and CRM setup. Never run out of pipeline again.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-icon">💼</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 12px">LinkedIn Ads Management</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              Target exact job titles, industries, and company sizes. Full campaign management with weekly reporting.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-icon">📧</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 12px">Email Marketing & Automation</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              AI-personalized outreach sequences. Nurture leads automatically until they're ready to buy.
            </p>
          </div>
          <div class="glass-card">
            <div class="card-icon">📈</div>
            <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 12px">Analytics & Reporting</h3>
            <p style="color: var(--muted); font-size: 0.9rem; line-height: 1.7">
              Full pipeline visibility. Know exactly where every lead is and what's working.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Featured Case Study</div>
          <h2 class="section-title">Oakmont Axis – 500+ Leads in 1 Week</h2>
        </div>
        <div class="glass-card fade-in" style="background: linear-gradient(135deg, rgba(35, 43, 92, 0.05), rgba(224, 92, 38, 0.08)); padding: 48px">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center" class="case-detail-grid">
            <div>
              <p style="font-size: 1.05rem; color: var(--muted); line-height: 1.9; margin-bottom: 24px">
                AI-powered LinkedIn outreach across 6 global markets. We helped Oakmont Axis build a reliable B2B pipeline with
                verified leads and automated follow-up sequences.
              </p>
              <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 24px">
                <div style="text-align: center; padding: 20px; background: #fff; border-radius: 12px; min-width: 120px">
                  <div style="font-family: Poppins, sans-serif; font-weight: 900; font-size: 1.8rem; color: var(--blue)">500+</div>
                  <div style="font-size: 0.8rem; color: var(--muted)">Leads in 1 Week</div>
                </div>
                <div style="text-align: center; padding: 20px; background: #fff; border-radius: 12px; min-width: 120px">
                  <div style="font-family: Poppins, sans-serif; font-weight: 900; font-size: 1.8rem; color: var(--blue)">80%</div>
                  <div style="font-size: 0.8rem; color: var(--muted)">Time Saved</div>
                </div>
                <div style="text-align: center; padding: 20px; background: #fff; border-radius: 12px; min-width: 120px">
                  <div style="font-family: Poppins, sans-serif; font-weight: 900; font-size: 1.8rem; color: var(--blue)">+15%</div>
                  <div style="font-size: 0.8rem; color: var(--muted)">Pipeline Visibility</div>
                </div>
              </div>
              <RouterLink to="/portfolio" class="btn-secondary" style="display: inline-block">Read Full Case Study →</RouterLink>
            </div>
            <div style="text-align: center">
              <img
                src="/assets/images/clients/oakmont-axis.jpg"
                alt="Oakmont Axis"
                width="280"
                height="187"
                loading="lazy"
                decoding="async"
                style="max-width: 280px; border-radius: 16px; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="problem-solution fade-in" style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start">
          <div class="problem-box" style="background: #fff; border: 1px solid var(--glass-border); border-radius: 20px; padding: 40px">
            <div class="box-title" style="font-family: Poppins, sans-serif; font-weight: 800; font-size: 1.3rem; margin-bottom: 24px">
              🔴 The B2B Problem
            </div>
            <ul class="box-list" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px">
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)"><span>❌</span>Long sales cycles with unpredictable outcomes</li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)"><span>❌</span>Poor targeting – reaching wrong decision makers</li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)"><span>❌</span>Manual prospecting wasting 20+ hours/week</li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)"><span>❌</span>No visibility into pipeline health</li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)"><span>❌</span>Inconsistent follow-up killing warm leads</li>
            </ul>
          </div>
          <div class="solution-box" style="background: #fff; border: 1px solid var(--glass-border); border-radius: 20px; padding: 40px">
            <div class="box-title" style="font-family: Poppins, sans-serif; font-weight: 800; font-size: 1.3rem; margin-bottom: 24px; color: var(--blue)">
              🔵 The Allied Axis Solution
            </div>
            <ul class="box-list" style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 16px">
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)">
                <span style="color: var(--blue); font-weight: bold">✓</span>AI-powered LinkedIn outreach targeting exact ICPs
              </li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)">
                <span style="color: var(--blue); font-weight: bold">✓</span>Verified lead lists across 6+ global markets
              </li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)">
                <span style="color: var(--blue); font-weight: bold">✓</span>Automated email sequences with AI personalization
              </li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)">
                <span style="color: var(--blue); font-weight: bold">✓</span>CRM integration for full pipeline visibility
              </li>
              <li style="display: flex; gap: 12px; font-size: 0.95rem; color: var(--muted)">
                <span style="color: var(--blue); font-weight: bold">✓</span>Weekly prospect lists + outreach templates
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="padding-top: 60px; padding-bottom: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Get In Touch</div>
          <h2 class="section-title">Let's Build Your Growth System</h2>
          <p class="section-sub">Tell us about your business and we'll craft a custom strategy – free.</p>
        </div>
        <div style="max-width: 640px; margin: 0 auto" class="fade-in">
          <form
            ref="formRef"
            name="contact-page"
            class="glass-card"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
            aria-label="Contact form"
            @input="clearFieldErrorOnInput"
            @change="clearFieldErrorOnInput"
            @submit.prevent="onSubmit"
          >
            <p class="hp" aria-hidden="true">
              <label>Do not fill: <input name="bot-field" autocomplete="off" tabindex="-1" /></label>
            </p>
            <div class="grid-2" style="gap: 16px">
              <div class="form-group">
                <label for="b2b-name">Full Name</label>
                <input id="b2b-name" type="text" name="name" required minlength="2" placeholder="Your name" />
              </div>
              <div class="form-group">
                <label for="b2b-email">Email Address</label>
                <input id="b2b-email" type="email" name="email" required placeholder="you@company.com" />
              </div>
              <div class="form-group">
                <label for="b2b-business">Business Name</label>
                <input id="b2b-business" type="text" name="business" maxlength="200" placeholder="Your company" />
              </div>
              <div class="form-group">
                <label for="b2b-service">Service Interested In</label>
                <select id="b2b-service" name="service">
                  <option>Lead Generation System</option>
                  <option>B2B Growth Audit</option>
                  <option>Essential Launch ($980)</option>
                  <option>Growth Launch ($1,800)</option>
                  <option>Complete Launch ($3,680)</option>
                  <option>SEO Retainer</option>
                  <option>Social Media Management</option>
                  <option>Paid Ads Management</option>
                  <option>Other / Custom Quote</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="b2b-msg">Message</label>
              <textarea id="b2b-msg" name="message" required minlength="10" maxlength="4000" placeholder="Tell us about your business goals and challenges..." />
            </div>
            <button type="submit" class="btn-primary" style="width: 100%; font-size: 1rem; padding: 16px" :disabled="busy">
              {{ busy ? 'Sending…' : 'Send Message – Request a Quotation →' }}
            </button>
            <p v-if="ok" class="form-msg success" role="status">{{ ok }}</p>
            <p v-if="err" class="form-msg error" role="alert">{{ err }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
