<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';

useHead({
  title: 'Contact Us – Request a Quotation | Allied Axis',
  meta: [
    {
      name: 'description',
      content: 'Ready to grow? Book a free strategy call with Allied Axis today. We respond within 24 hours.'
    }
  ]
});

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
          <div class="section-label">Let's Talk</div>
          <h1 class="section-title">Start Your Growth Journey</h1>
          <p class="section-sub">We respond within 24 hours – always.</p>
        </div>
        <div class="contact-grid fade-in">
          <div>
            <div class="contact-info-item">
              <div class="contact-icon">✉️</div>
              <div>
                <div class="contact-label">Email</div>
                <div class="contact-value">info@alliedaxis.digital</div>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon">📞</div>
              <div>
                <div class="contact-label">Phone</div>
                <div class="contact-value">+92 325 1518471</div>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-icon" style="background: #25d366; border-color: #25d366">💬</div>
              <div>
                <div class="contact-label">WhatsApp</div>
                <a
                  href="https://wa.me/923251518471?text=Hi%2C%20I%20want%20to%20discuss%20my%20business%20growth."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary"
                  style="display: inline-block; margin-top: 8px; font-size: 0.85rem; padding: 10px 20px; background: #25d366"
                  >Open WhatsApp →</a
                >
              </div>
            </div>
            <div class="glass-card" style="margin-top: 32px; background: rgba(30, 144, 255, 0.05)">
              <div style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">⚡ Response Guarantee</div>
              <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                We respond to every inquiry within <strong style="color: var(--navy)">24 hours</strong> – always. If we don't,
                your first consultation is on us.
              </p>
            </div>
            <div class="glass-card" style="margin-top: 16px">
              <div style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 12px">Markets We Serve</div>
              <div style="display: flex; flex-wrap: wrap; gap: 10px">
                <span
                  style="
                    background: rgba(30, 144, 255, 0.1);
                    border: 1px solid var(--glass-border);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 0.8rem;
                  "
                  >🇦🇪 UAE</span
                >
                <span
                  style="
                    background: rgba(30, 144, 255, 0.1);
                    border: 1px solid var(--glass-border);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 0.8rem;
                  "
                  >🇬🇧 UK</span
                >
                <span
                  style="
                    background: rgba(30, 144, 255, 0.1);
                    border: 1px solid var(--glass-border);
                    padding: 6px 14px;
                    border-radius: 50px;
                    font-size: 0.8rem;
                  "
                  >🇵🇰 Pakistan</span
                >
              </div>
            </div>
          </div>
          <div class="glass-card fade-in">
            <h3 style="font-family: Poppins, sans-serif; font-weight: 800; margin-bottom: 24px">Send a Message</h3>
            <form
              id="contact-form"
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
                  <label for="c-name">Full Name *</label>
                  <input id="c-name" type="text" name="name" placeholder="Your name" required minlength="2" maxlength="120" />
                </div>
                <div class="form-group">
                  <label for="c-email">Email Address *</label>
                  <input id="c-email" type="email" name="email" placeholder="you@company.com" required autocomplete="email" />
                </div>
                <div class="form-group">
                  <label for="c-phone">Phone Number</label>
                  <input id="c-phone" type="tel" name="phone" placeholder="+971 xx xxx xxxx" autocomplete="tel" />
                </div>
                <div class="form-group">
                  <label for="c-business">Business Name</label>
                  <input id="c-business" type="text" name="business" maxlength="200" placeholder="Your company" />
                </div>
              </div>
              <div class="form-group">
                <label for="c-service">Service Interested In</label>
                <select id="c-service" name="service">
                  <option>Essential Launch ($980)</option>
                  <option>Growth Launch ($1,800)</option>
                  <option>Complete Launch ($3,680)</option>
                  <option>SEO Retainer</option>
                  <option>Social Media Management</option>
                  <option>Paid Ads Management</option>
                  <option>Lead Generation System</option>
                  <option>B2B Growth Audit (Free)</option>
                  <option>Custom Quote / Other</option>
                </select>
              </div>
              <div class="form-group">
                <label for="c-message">Message *</label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  minlength="10"
                  maxlength="4000"
                  placeholder="Tell us about your business, your goals, and your challenges..."
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
  </div>
</template>
