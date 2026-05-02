<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';

useHead({
  title: 'Insights & Strategies – Allied Axis Blog',
  meta: [
    {
      name: 'description',
      content:
        'AI marketing, lead generation, and social media growth strategies. Practical insights from the frontline. Free resources & guides.'
    }
  ]
});

const posts = [
  {
    id: 'ai-marketing',
    tag: 'AI Marketing',
    icon: '🤖',
    title: 'How AI is Transforming Digital Marketing in 2026',
    excerpt:
      "From content creation to lead scoring, AI tools are changing how agencies operate and how businesses grow. Here's what every business owner needs to know.",
    meta: 'March 2026 · 5 min read',
    reverse: false
  },
  {
    id: 'b2b-leads',
    tag: 'Lead Generation',
    icon: '🎯',
    title: 'How We Generated 500+ B2B Leads in 1 Week',
    excerpt:
      'The exact AI-powered outreach system we used to generate 500+ qualified B2B leads across 6 global markets in a single week – and how to replicate it.',
    meta: 'Feb 2026 · 7 min read',
    reverse: true
  },
  {
    id: 'social-media',
    tag: 'Social Media',
    icon: '📱',
    title: '5 Social Media Growth Strategies That Actually Work',
    excerpt:
      'Tired of posting and getting nothing? These 5 data-driven strategies are what we use for clients to build real, engaged audiences that convert.',
    meta: 'Jan 2026 · 6 min read',
    reverse: false
  },
  {
    id: 'launch-framework',
    tag: 'Business Scaling',
    icon: '🚀',
    title: 'The Fast Business Launch Framework',
    excerpt:
      'What most agencies take months to do, we do in weeks. This is the exact framework we use to take businesses from zero to fully operational online presence.',
    meta: 'Dec 2025 · 8 min read',
    reverse: true
  },
  {
    id: 'uae-market',
    tag: 'Market Strategy',
    icon: '🌍',
    title: 'Digital Marketing in the UAE: What Works',
    excerpt:
      "The UAE market is unique – culturally, linguistically, and commercially. Here's what we've learned running campaigns across Dubai, Abu Dhabi, and beyond.",
    meta: 'Nov 2025 · 5 min read',
    reverse: false
  },
  {
    id: 'vanity-metrics',
    tag: 'Analytics',
    icon: '📊',
    title: 'Stop Tracking Vanity Metrics',
    excerpt:
      "Likes and followers are not a business metric. Here's exactly what numbers you should be tracking and how to set up a dashboard that predicts revenue.",
    meta: 'Oct 2025 · 6 min read',
    reverse: true
  }
];

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
    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Insights</div>
          <h1 class="section-title">Insights from the Frontline</h1>
          <p class="section-sub">AI marketing, lead generation tips, social media growth – straight from the field.</p>
        </div>

        <div class="blog-feed">
          <article
            v-for="p in posts"
            :id="p.id"
            :key="p.id"
            class="blog-row fade-in"
            :class="p.reverse ? 'blog-row-reverse' : 'blog-row-normal'"
          >
            <div class="blog-img" aria-hidden="true">{{ p.icon }}</div>
            <div class="blog-body">
              <div class="blog-tag">{{ p.tag }}</div>
              <h2 class="blog-title">{{ p.title }}</h2>
              <p class="blog-excerpt">{{ p.excerpt }}</p>
              <div class="blog-meta">{{ p.meta }}</div>
              <span class="blog-read">Read full →</span>
            </div>
          </article>
        </div>
      </div>

      <section id="blog-contact" class="section blog-contact-section">
        <div class="container">
          <div class="section-header center fade-in">
            <div class="section-label">Get In Touch</div>
            <h2 class="section-title">Let's Build Your Growth System</h2>
            <p class="section-sub">Tell us about your business and we'll craft a custom strategy – free.</p>
          </div>
          <div style="max-width: 640px; margin: 0 auto" class="fade-in">
            <div class="glass-card">
              <form
                ref="formRef"
                name="contact-page"
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
                    <label for="blog-name">Full Name</label>
                    <input id="blog-name" type="text" name="name" placeholder="Your name" required minlength="2" maxlength="120" />
                  </div>
                  <div class="form-group">
                    <label for="blog-email">Email Address</label>
                    <input id="blog-email" type="email" name="email" placeholder="you@company.com" required autocomplete="email" />
                  </div>
                  <div class="form-group">
                    <label for="blog-business">Business Name</label>
                    <input id="blog-business" type="text" name="business" maxlength="200" placeholder="Your company" />
                  </div>
                  <div class="form-group">
                    <label for="blog-service">Service Interested In</label>
                    <select id="blog-service" name="service">
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
                  <label for="blog-message">Message</label>
                  <textarea
                    id="blog-message"
                    name="message"
                    required
                    minlength="10"
                    maxlength="4000"
                    placeholder="Tell us about your business goals and challenges..."
                  />
                </div>
                <button type="submit" class="btn-primary" style="width: 100%; font-size: 1rem; padding: 16px" :disabled="busy">
                  {{ busy ? 'Sending…' : 'Send Message – Request a Quotation →' }}
                </button>
                <p v-if="ok" class="form-msg success" role="status">{{ ok }}</p>
                <p v-if="err" class="form-msg error" role="alert">{{ err }}</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.blog-feed {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1100px;
  margin: 0 auto;
}

.blog-row {
  display: flex;
  gap: 0;
  align-items: stretch;
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.blog-row-reverse {
  flex-direction: row-reverse;
}

.blog-img {
  flex: 0 0 50%;
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  line-height: 1;
  background: linear-gradient(135deg, rgba(35, 43, 92, 0.05), rgba(224, 92, 38, 0.08));
}

.blog-body {
  flex: 1;
  padding: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.blog-tag {
  display: inline-block;
  background: rgba(35, 43, 92, 0.1);
  color: var(--blue);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 16px;
  width: fit-content;
}

.blog-title {
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 16px;
  line-height: 1.3;
  color: var(--navy);
}

.blog-excerpt {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.blog-meta {
  font-size: 0.8rem;
  color: var(--muted);
}

.blog-read {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 16px;
  color: var(--blue);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: default;
}

.blog-contact-section {
  padding-top: 60px;
  padding-bottom: 0;
}

@media (max-width: 900px) {
  .blog-row-normal,
  .blog-row-reverse {
    flex-direction: column;
  }

  .blog-img {
    flex: none;
    width: 100%;
    min-height: 220px;
  }

  .blog-body {
    padding: 28px;
  }
}
</style>
