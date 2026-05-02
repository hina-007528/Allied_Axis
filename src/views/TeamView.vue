<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import { RouterLink } from 'vue-router';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';

const IMG_BASE = '/assets/images/';
const maryamPhoto = ref(`${IMG_BASE}${encodeURIComponent('WhatsApp Image 2026-04-13 at 4.26.11 PM.jpeg')}`);
const abdulPhoto = ref(`${IMG_BASE}${encodeURIComponent('Professional portrait in modern office setting (1).png')}`);
const noorPhoto = ref(`${IMG_BASE}${encodeURIComponent('WhatsApp Image 2026-04-18 at 4.19.11 PM.jpeg')}`);
const noorImgOk = ref(true);

function onImgError(e) {
  e.target.style.display = 'none';
  const ph = e.target.nextElementSibling;
  if (ph && ph.classList?.contains('founder-photo-fallback')) ph.style.display = 'flex';
}

function onNoorImgError() {
  noorImgOk.value = false;
}

useHead({
  title: 'Our Team – Allied Axis | Maryam Fatima & Abdul Rehman',
  meta: [
    {
      name: 'description',
      content:
        'Meet Maryam Fatima (Founder & CEO) and Abdul Rehman (Co-Founder). AI-powered growth experts serving UAE, UK, Pakistan.'
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
          <div class="section-label">Our Team</div>
          <h1 class="section-title">The People Behind the Results</h1>
          <p class="section-sub">A small, passionate team of experts dedicated to your growth.</p>
        </div>

        <!-- FOUNDER & CEO -->
        <div
          class="glass-card fade-in"
          style="margin-bottom: 48px; background: linear-gradient(135deg, rgba(35, 43, 92, 0.02), rgba(224, 92, 38, 0.05))"
        >
          <div class="grid-2 team-leader-grid">
            <div style="text-align: center">
              <div style="display: inline-block; position: relative">
                <img
                  :src="maryamPhoto"
                  alt="Maryam Fatima"
                  width="320"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  style="
                    width: 320px;
                    height: 320px;
                    border-radius: 50%;
                    object-fit: cover;
                    border: 6px solid var(--blue);
                    box-shadow: 0 30px 60px rgba(224, 92, 38, 0.3);
                  "
                  @error="onImgError"
                />
                <div
                  class="founder-photo-fallback"
                  style="
                    display: none;
                    width: 320px;
                    height: 320px;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    font-family: Poppins, sans-serif;
                    font-size: 3rem;
                    font-weight: 900;
                    color: var(--navy);
                    border: 6px solid var(--blue);
                    box-shadow: 0 30px 60px rgba(224, 92, 38, 0.3);
                    background: linear-gradient(135deg, rgba(30, 144, 255, 0.15), rgba(224, 92, 38, 0.12));
                  "
                >
                  MF
                </div>
                <div
                  style="
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--navy);
                    color: #fff;
                    padding: 6px 14px;
                    border-radius: 8px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                  "
                >
                  Founder &amp; CEO
                </div>
              </div>
            </div>
            <div>
              <div class="section-label">Our Leadership</div>
              <h2 style="font-family: Poppins, sans-serif; font-size: 2.2rem; font-weight: 900; margin-bottom: 6px; color: var(--navy)">
                Maryam Fatima
              </h2>
              <div style="color: var(--blue); font-weight: 600; font-size: 1rem; margin-bottom: 20px; letter-spacing: 0.02em">
                International Digital Launch Strategist
              </div>
              <p style="color: var(--muted); line-height: 1.9; font-size: 1.05rem; margin-bottom: 24px">
                Maryam founded Allied Axis after 3+ years of helping businesses across UAE, UK, and Pakistan scale with AI-powered digital systems. With
                extensive expertise and a proven track record, she has personally generated hundreds of thousands in revenue for clients across 6+
                global markets.
              </p>
              <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px">
                <a
                  href="tel:+923251518471"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="Phone"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:work@maryamfatima.com"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/the-maryam-fatima?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
              </div>
              <div style="display: flex; gap: 16px; flex-wrap: wrap">
                <a
                  href="https://www.maryamfatima.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary"
                  style="text-decoration: none; display: inline-block"
                  >Visit Founder's Site →</a
                >
                <RouterLink to="/contact" class="btn-secondary" style="text-decoration: none; display: inline-block">Discuss Your Strategy</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- CO-FOUNDER -->
        <div
          class="glass-card fade-in"
          style="margin-bottom: 48px; background: linear-gradient(135deg, rgba(35, 43, 92, 0.02), rgba(224, 92, 38, 0.05))"
        >
          <div class="grid-2 team-leader-grid">
            <div style="text-align: center">
              <div style="display: inline-block; position: relative">
                <img
                  :src="abdulPhoto"
                  alt="Abdul Rehman"
                  width="320"
                  height="320"
                  loading="lazy"
                  decoding="async"
                  style="
                    width: 320px;
                    height: 320px;
                    border-radius: 50%;
                    object-fit: cover;
                    object-position: top center;
                    border: 6px solid var(--blue);
                    box-shadow: 0 30px 60px rgba(224, 92, 38, 0.3);
                  "
                  @error="onImgError"
                />
                <div
                  class="founder-photo-fallback"
                  style="
                    display: none;
                    width: 320px;
                    height: 320px;
                    border-radius: 50%;
                    align-items: center;
                    justify-content: center;
                    font-family: Poppins, sans-serif;
                    font-size: 3rem;
                    font-weight: 900;
                    color: var(--navy);
                    border: 6px solid var(--blue);
                    box-shadow: 0 30px 60px rgba(224, 92, 38, 0.3);
                    background: linear-gradient(135deg, rgba(30, 144, 255, 0.15), rgba(224, 92, 38, 0.12));
                  "
                >
                  AR
                </div>
                <div
                  style="
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: var(--navy);
                    color: #fff;
                    padding: 6px 14px;
                    border-radius: 8px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    white-space: nowrap;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                  "
                >
                  Co-Founder
                </div>
              </div>
            </div>
            <div>
              <div class="section-label">Our Leadership</div>
              <h2 style="font-family: Poppins, sans-serif; font-size: 2.2rem; font-weight: 900; margin-bottom: 6px; color: var(--navy)">
                Abdul Rehman
              </h2>
              <div style="color: var(--blue); font-weight: 600; font-size: 1rem; margin-bottom: 20px; letter-spacing: 0.02em">
                Co-Founder | Performance Marketing Specialist
              </div>
              <p style="color: var(--muted); line-height: 1.9; font-size: 1.05rem; margin-bottom: 24px">
                Muhammad Rehman Aslam is a performance marketing specialist with a mathematics-driven, data-first approach to digital growth. At Allied
                Axis, he has helped brands across multiple industries achieve 40% increases in organic traffic, 25%+ improvements in ad CTR, and 30%
                higher engagement — all within 3 months. By combining SEO, paid media, and high-converting content strategies, he turns raw data into
                predictable revenue streams. His expertise in mobile videography and visual storytelling adds a creative edge to every campaign,
                ensuring brands not only reach their audience but resonate with them.
              </p>
              <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px">
                <a
                  href="tel:+923251518471"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="Phone"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:muhammadrehman5514@gmail.com"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="Email"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-rehman-aslam-6037a6357/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: rgba(224, 92, 38, 0.1);
                    color: var(--blue);
                    text-decoration: none;
                  "
                  aria-label="LinkedIn Profile"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    />
                  </svg>
                </a>
              </div>
              <div style="display: flex; gap: 16px; flex-wrap: wrap">
                <RouterLink to="/contact" class="btn-secondary" style="text-decoration: none; display: inline-block">Discuss Your Strategy</RouterLink>
              </div>
            </div>
          </div>
        </div>

        <!-- TEAM CARDS -->
        <div class="grid-3 fade-in">
          <div class="team-card">
            <div class="team-avatar">WD</div>
            <div class="team-name">Web Developer</div>
            <div class="team-role">Technical Lead</div>
            <p class="team-bio">
              Builds high-converting, SEO-optimised websites that load fast and rank higher. Expert in modern web technologies and performance
              optimisation.
            </p>
          </div>
          <div class="team-card">
            <div
              class="team-avatar"
              style="
                background: linear-gradient(135deg, #a855f7, #6d28d9);
                padding: 0;
                border-radius: 50%;
                overflow: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <img
                v-if="noorImgOk"
                :src="noorPhoto"
                alt="Noor Fatima"
                width="80"
                height="80"
                loading="lazy"
                style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%"
                @error="onNoorImgError"
              />
              <span v-else style="font-family: Poppins, sans-serif; font-weight: 800; font-size: 1.1rem; color: #fff">NF</span>
            </div>
            <div class="team-name">Noor Fatima</div>
            <div class="team-role">Graphic Designer</div>
            <p class="team-bio">Creates brand identities, social visuals, and marketing assets that stop the scroll and build instant brand recognition.</p>
          </div>
          <div class="team-card">
            <div class="team-avatar" style="background: linear-gradient(135deg, #25d366, #128c7e)">SE</div>
            <div class="team-name">Sales Executive</div>
            <div class="team-role">Growth Lead</div>
            <p class="team-bio">Drives lead generation and client acquisition. Connects the right businesses with the right solutions at the right time.</p>
          </div>
        </div>

        <!-- GLOBAL CONTACT FORM -->
        <section class="section" id="team-contact" style="padding-top: 60px; padding-bottom: 0">
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
                      <label for="t-name">Full Name</label>
                      <input id="t-name" type="text" name="name" placeholder="Your name" required minlength="2" maxlength="120" />
                    </div>
                    <div class="form-group">
                      <label for="t-email">Email Address</label>
                      <input id="t-email" type="email" name="email" placeholder="you@company.com" required autocomplete="email" />
                    </div>
                    <div class="form-group">
                      <label for="t-business">Business Name</label>
                      <input id="t-business" type="text" name="business" maxlength="200" placeholder="Your company" />
                    </div>
                    <div class="form-group">
                      <label for="t-service">Service Interested In</label>
                      <select id="t-service" name="service">
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
                    <label for="t-message">Message</label>
                    <textarea
                      id="t-message"
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

        <!-- WHY WORK WITH US -->
        <div style="margin-top: 72px">
          <div class="section-header center fade-in">
            <h2 class="section-title">Why Work With Us</h2>
          </div>
          <div class="grid-3 fade-in">
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">⚡</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">Fast Execution</h3>
              <p style="color: var(--muted); font-size: 0.85rem">Zero to fully operational in weeks. Tested across multiple industries.</p>
            </div>
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">🤖</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">AI-First Approach</h3>
              <p style="color: var(--muted); font-size: 0.85rem">We use the latest AI tools to deliver more, faster, for less.</p>
            </div>
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">📈</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">Results-Driven Only</h3>
              <p style="color: var(--muted); font-size: 0.85rem">No vanity metrics. Every KPI ties back to revenue and growth.</p>
            </div>
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">🌍</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">3 Markets, 1 Team</h3>
              <p style="color: var(--muted); font-size: 0.85rem">UAE · UK · Pakistan. We understand the nuances of each market.</p>
            </div>
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">🔗</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">End-to-End Partner</h3>
              <p style="color: var(--muted); font-size: 0.85rem">One team handles everything. No coordination headaches.</p>
            </div>
            <div class="glass-card" style="text-align: center">
              <div style="font-size: 1.8rem; margin-bottom: 12px">🔒</div>
              <h3 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px">Full Ownership</h3>
              <p style="color: var(--muted); font-size: 0.85rem">Everything we build is yours. No lock-ins, no dependencies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.team-leader-grid {
  align-items: center;
  gap: 48px;
}

@media (max-width: 900px) {
  .team-leader-grid {
    grid-template-columns: 1fr;
  }
}
</style>
