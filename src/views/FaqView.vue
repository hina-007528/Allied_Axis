<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';

useHead({
  title: 'FAQ – Allied Axis | Pricing, Process & Results',
  meta: [
    {
      name: 'description',
      content:
        'Answers about our pricing (from $980), timelines, ownership, and results. 3 markets served. Get answers to common questions.'
    }
  ]
});

const open = ref(null);
const items = [
  {
    q: 'How long does a digital launch take?',
    a:
      "From start to launch in weeks. We've done it consistently for businesses in UAE, UK, and Pakistan across multiple industries."
  },
  {
    q: 'Do I own my website and domain?',
    a:
      'Yes – full ownership is transferred to you after final payment. No lock-ins, no ongoing dependencies. Everything is yours.'
  },
  {
    q: 'What is the investment?',
    a:
      'Packages start at $980 for the Essential Launch. Monthly retainers start from $490/month. All retainers require a 3-month minimum commitment.'
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes – 50% advance to begin work, 50% on completion. Simple and fair. No hidden fees ever.'
  },
  {
    q: 'What happens after launch?',
    a:
      'We offer monthly retainers for social media management, SEO, paid ads, lead generation, and website maintenance. We can be your long-term growth partner.'
  },
  {
    q: 'Can you help with B2B lead generation?',
    a:
      "Yes – this is one of our core specialisms. We've generated 500+ qualified B2B leads in a single week for clients across 6 global markets."
  },
  {
    q: 'Do you work with startups?',
    a:
      "Yes – exclusively with startups and SMEs. We're not the right fit for enterprise. We love working with businesses building something real from the ground up."
  },
  {
    q: 'What platforms do you manage ads on?',
    a:
      'Meta (Facebook & Instagram), Google (Search, Display, YouTube), and LinkedIn. We select the best channels for your specific audience and goals.'
  },
  {
    q: 'Is there a contract?',
    a:
      "Monthly retainers require a 3-month minimum commitment. After that, you're on a rolling monthly basis. One-time packages have no ongoing commitment."
  }
];
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">FAQ</div>
          <h1 class="section-title">Frequently Asked Questions</h1>
          <p class="section-sub">Answers to common questions about our process, pricing, and results.</p>
        </div>
        <div style="max-width: 760px; margin: 0 auto" class="fade-in">
          <div v-for="(item, i) in items" :key="i" class="faq-item">
            <button type="button" class="faq-q" :aria-expanded="open === i" @click="open = open === i ? null : i">
              <span>{{ item.q }}</span>
              <span class="faq-icon">{{ open === i ? '−' : '+' }}</span>
            </button>
            <div class="faq-a" :class="{ open: open === i }">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
        <p style="text-align: center; margin-top: 2rem">
          <RouterLink to="/contact">Still unsure? Contact us →</RouterLink>
        </p>
      </div>
    </section>
  </div>
</template>
