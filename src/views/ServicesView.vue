<script setup>
import { useHead } from '@unhead/vue';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';
import { ref } from 'vue';
import InquireNowButton from '@/components/InquireNowButton.vue';

const { openQuote } = useQuoteModal();

const contactForm = ref(null);
const contactOk = ref('');
const contactErr = ref('');
const contactBusy = ref(false);

const serviceCategories = [
  {
    icon: '🌍',
    title: 'Website & Technical',
    problem: '"Your website outdated and slow?"',
    features: ['5-Page SEO Website', 'Domain & SSL Setup', 'Professional Emails', '24/7 Monitoring']
  },
  {
    icon: '🎨',
    title: 'Branding & Creative',
    problem: '"Inconsistent brand image?"',
    features: ['Custom Logo Design', 'Brand Guidelines', 'Business Cards', 'Social Templates']
  },
  {
    icon: '📱',
    title: 'Social Media & Content',
    problem: '"Posting with zero engagement?"',
    features: ['Content Calendars', 'Full Account Mgmt', 'Daily Posting', 'Analytics Reports']
  },
  {
    icon: '🎯',
    title: 'Lead Generation',
    problem: '"No reliable B2B pipeline?"',
    features: ['Prospect List Building', 'CRM Integrations', 'Outreach Templates', 'Custom Landing Pages']
  },
  {
    icon: '📢',
    title: 'Marketing & Ads',
    problem: '"Wasting ad spend?"',
    features: ['Meta/Google Ads', 'Budget Optimization', 'Retargeting Setup', 'Performance Reports']
  },
  {
    icon: '🔍',
    title: 'SEO & Analytics',
    problem: '"Invisible on Google?"',
    features: ['Keyword Strategy', 'On-Page Optimization', 'Backlink Monitoring', 'Monthly SEO Audits']
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    problem: '"Need valuable content?"',
    features: ['Authority Articles', 'Editorial Calendars', 'Content Distribution', 'Strategy Audits']
  },
  {
    icon: '📧',
    title: 'Email Marketing',
    problem: '"Low open rates?"',
    features: ['Campaign Strategy', 'List Segmentation', 'Automated Flows', 'Conversion Tracking']
  },
  {
    icon: '🎬',
    title: 'Video Editing',
    problem: '"Need short‑form videos?"',
    features: ['Reel/TikTok Editing', 'Ad Scripting', 'Scroll-Stopping Clips', 'Color Grading']
  }
];

const retainerRows = [
  { service: 'SEO', price: '$490', included: 'Keyword tracking, on‑page SEO, backlinks, monthly report' },
  { service: 'Social Media Management', price: '$650', included: 'Daily posting, engagement, 4+ reels, monthly report' },
  { service: 'Paid Ads Management', price: '$490 + ad spend', included: 'Meta, Google, LinkedIn – full management + reporting' },
  { service: 'Content Marketing', price: '$400', included: 'Blog posts, content distribution, strategy' },
  { service: 'Email Marketing', price: '$400', included: 'Campaigns, automation, list management' },
  { service: 'Lead Generation System', price: '$490', included: 'Weekly prospect lists, outreach templates, CRM setup' },
  { service: 'Website Maintenance', price: '$135', included: 'Updates, backups, security, minor changes' }
];

useHead({
  title: 'Digital Launch & Marketing Services – Allied Axis',
  meta: [
    {
      name: 'description',
      content:
        'Digital Launch packages from $980. AI-powered websites, SEO, social media, and lead generation. Serving UAE, UK, Pakistan. Free strategy call.'
    }
  ]
});

async function submitContact() {
  contactOk.value = '';
  contactErr.value = '';
  const form = contactForm.value;
  if (!form) return;
  contactBusy.value = true;
  try {
    const res = await submitNetlifyForm(form, '/');
    if (res.ok) {
      contactOk.value = 'Thanks — we received your message and will reply within 24 hours.';
      form.reset();
    } else if (res.error) {
      contactErr.value = res.error;
      res.field?.focus();
    } else contactErr.value = 'Something went wrong. Please email info@alliedaxis.digital.';
  } finally {
    contactBusy.value = false;
  }
}
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Services</div>
          <h1 class="section-title">Not sure which service fits your challenge?</h1>
          <p class="section-sub">
            Every service is designed to solve a real business problem – from invisible brand to revenue engine.
          </p>
        </div>

        <div class="section-header center fade-in">
          <h2 style="font-family: Poppins, sans-serif; font-size: 1.4rem; font-weight: 800">Individual Services – Problem First</h2>
          <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 8px">Prices quoted on request.</p>
        </div>
        <div class="grid-3" style="margin-top: 32px">
          <div v-for="(cat, idx) in serviceCategories" :key="cat.title" class="svc-cat fade-in">
            <div class="svc-icon-box">{{ cat.icon }}</div>
            <h3 class="svc-cat-title">{{ cat.title }}</h3>
            <div class="svc-cat-problem">{{ cat.problem }}</div>
            <ul class="svc-feature-list">
              <li v-for="f in cat.features" :key="f" class="svc-feature-item">{{ f }}</li>
            </ul>
            <InquireNowButton :stagger-index="idx" @click="openQuote" />
          </div>
        </div>

        <div id="pricing" class="section-header fade-in" style="margin-top: 80px; scroll-margin-top: 100px">
          <h2 style="font-family: Poppins, sans-serif; font-size: 1.4rem; font-weight: 800; margin-bottom: 6px">
            One‑Time Launch Packages
          </h2>
        </div>
        <div class="pricing-grid" style="margin-bottom: 60px">
          <div class="price-card fade-in">
            <h3 class="price-name">Essential Launch</h3>
            <div class="price-amount"><sup>$</sup>980</div>
            <ul class="price-features">
              <li>Logo Design</li>
              <li>Business Cards</li>
              <li>Letter Pad</li>
              <li>5‑Page Website</li>
              <li>Professional Email Setup</li>
              <li>Basic Social Accounts Setup</li>
            </ul>
            <button type="button" class="btn-primary" style="width: 100%" @click="openQuote">Get Started</button>
          </div>
          <div class="price-card featured fade-in">
            <h3 class="price-name">Growth Launch</h3>
            <div class="price-amount"><sup>$</sup>1,800</div>
            <ul class="price-features">
              <li>Everything in Essential</li>
              <li>30‑Day Content Calendar</li>
              <li>10 Reel Scripts</li>
              <li>Basic Digital Strategy</li>
            </ul>
            <button type="button" class="btn-primary" style="width: 100%" @click="openQuote">Get Started</button>
          </div>
          <div class="price-card fade-in">
            <h3 class="price-name">Complete Launch</h3>
            <div class="price-amount"><sup>$</sup>3,680</div>
            <ul class="price-features">
              <li>Everything in Growth</li>
              <li>Lead Generation System</li>
              <li>Stock Media Library</li>
              <li>Full Brand Guidelines</li>
              <li>2 Content Calendars</li>
              <li>1‑Month Social Media Management</li>
            </ul>
            <button type="button" class="btn-primary" style="width: 100%" @click="openQuote">Get Started</button>
          </div>
        </div>

        <div class="section-header fade-in">
          <h2 style="font-family: Poppins, sans-serif; font-size: 1.4rem; font-weight: 800; margin-bottom: 6px">Monthly Retainers</h2>
          <p style="color: var(--text-light); font-size: 0.9rem">3‑month minimum commitment.</p>
        </div>
        <div class="glass-card fade-in" style="overflow-x: auto; margin-bottom: 80px">
          <table class="styled-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Price (USD/month)</th>
                <th>What's Included</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in retainerRows" :key="row.service">
                <td><strong style="color: var(--navy)">{{ row.service }}</strong></td>
                <td class="check">{{ row.price }}</td>
                <td>{{ row.included }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <section class="section" style="padding-top: 60px; padding-bottom: 0">
          <div class="container">
            <div class="section-header center fade-in">
              <div class="section-label">Get In Touch</div>
              <h2 class="section-title">Let's Build Your Growth System</h2>
              <p class="section-sub">Tell us about your business and we'll craft a custom strategy – free.</p>
            </div>
            <div style="max-width: 640px; margin: 0 auto" class="fade-in">
              <form
                ref="contactForm"
                name="contact-page"
                class="glass-card"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/"
                aria-label="Contact form"
                @input="clearFieldErrorOnInput"
                @change="clearFieldErrorOnInput"
                @submit.prevent="submitContact"
              >
                <p class="hp" aria-hidden="true">
                  <label>Do not fill: <input name="bot-field" autocomplete="off" tabindex="-1" /></label>
                </p>
                <div class="grid-2" style="gap: 16px">
                  <div class="form-group">
                    <label for="sv-name">Full Name</label>
                    <input id="sv-name" type="text" name="name" required minlength="2" maxlength="120" placeholder="Your name" />
                  </div>
                  <div class="form-group">
                    <label for="sv-email">Email Address</label>
                    <input id="sv-email" type="email" name="email" required autocomplete="email" placeholder="you@company.com" />
                  </div>
                  <div class="form-group">
                    <label for="sv-business">Business Name</label>
                    <input id="sv-business" type="text" name="business" maxlength="200" placeholder="Your company" />
                  </div>
                  <div class="form-group">
                    <label for="sv-service">Service Interested In</label>
                    <select id="sv-service" name="service">
                      <option>Essential Launch ($980)</option>
                      <option>Growth Launch ($1,800)</option>
                      <option>Complete Launch ($3,680)</option>
                      <option>SEO Retainer</option>
                      <option>Social Media Management</option>
                      <option>Paid Ads Management</option>
                      <option>Lead Generation System</option>
                      <option>B2B Growth Audit</option>
                      <option>Other / Custom Quote</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="sv-msg">Message</label>
                  <textarea
                    id="sv-msg"
                    name="message"
                    required
                    minlength="10"
                    maxlength="4000"
                    placeholder="Tell us about your business goals and challenges..."
                  />
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; font-size: 1rem; padding: 16px" :disabled="contactBusy">
                  {{ contactBusy ? 'Sending…' : 'Send Message – Request a Quotation →' }}
                </button>
                <p v-if="contactOk" class="form-msg success" role="status">{{ contactOk }}</p>
                <p v-if="contactErr" class="form-msg error" role="alert">{{ contactErr }}</p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
