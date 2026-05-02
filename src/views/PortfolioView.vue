<script setup>
import { useHead } from '@unhead/vue';
import { useQuoteModal } from '@/composables/useQuoteModal.js';

useHead({
  title: 'Our Portfolio – Allied Axis Success Stories',
  meta: [
    {
      name: 'description',
      content:
        'Real results: 500+ B2B leads in 1 week, 50+ tourism leads, +20% efficiency. Case studies from UAE, UK, Pakistan.'
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
          <div class="section-label">Our Work</div>
          <h1 class="section-title">Success Stories & Results</h1>
          <p class="section-sub">We don't just build websites; we build growth systems. Here's the proof.</p>
        </div>

        <div class="case-studies">
          <!-- Case 1 -->
          <div class="glass-card fade-in" style="margin-bottom: 32px">
            <div class="case-detail-grid portfolio-case-grid">
              <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; align-items: center">
                <div
                  style="
                    margin-bottom: 16px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 200px;
                  "
                >
                  <img
                    src="/assets/images/clients/affra-afzal-tourism.jpg"
                    alt="Affra Afzal Tourism"
                    width="200"
                    height="200"
                    loading="lazy"
                    style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 12px"
                  />
                </div>
                <div
                  style="
                    background: rgba(30, 144, 255, 0.08);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                  "
                >
                  <div style="color: var(--muted); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px">Result</div>
                  <div style="font-family: Poppins, sans-serif; font-size: 1.8rem; font-weight: 900; color: var(--blue)">50+</div>
                  <div style="font-size: 0.85rem; color: var(--muted)">Qualified leads in Month 1</div>
                </div>
              </div>
              <div>
                <div class="case-tag">Case Study 01 · Tourism · Dubai, UAE</div>
                <h2 style="font-family: Poppins, sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: 16px">Affra Afzal Tourism</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px">
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: #ff6b6b; margin-bottom: 8px; font-size: 0.9rem">🔴 The Problem</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      Government-licensed tourism company with zero digital presence – no website, logo, email, social, or content strategy.
                    </p>
                  </div>
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: var(--blue); margin-bottom: 8px; font-size: 0.9rem">🔵 The Solution</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      Complete digital launch – Domain, hosting, email, logo, 5-page website, 4 social platforms, content calendars, and reel scripts.
                    </p>
                  </div>
                </div>
                <div style="background: rgba(30, 144, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; margin-bottom: 20px">
                  <h4 style="font-family: Poppins, sans-serif; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px">📈 Results</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 16px">
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">Weeks</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">to Go Live</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">2 Wks</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">First Revenue</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">50+</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Leads Month 1</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">18</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Deliverables</div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-primary" @click="openQuote">Let's achieve similar results →</button>
              </div>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="glass-card fade-in" style="margin-bottom: 32px">
            <div class="case-detail-grid portfolio-case-grid">
              <div style="display: flex; flex-direction: column; align-items: center">
                <div style="margin-bottom: 16px; height: 200px; display: flex; align-items: center; justify-content: center">
                  <img
                    src="/assets/images/clients/oakmont-axis.jpg"
                    alt="Oakmont Axis"
                    width="280"
                    height="187"
                    loading="lazy"
                    style="max-height: 100%; border-radius: 12px; object-fit: contain"
                  />
                </div>
                <div
                  style="
                    background: rgba(30, 144, 255, 0.08);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                  "
                >
                  <div style="color: var(--muted); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px">Result</div>
                  <div style="font-family: Poppins, sans-serif; font-size: 1.8rem; font-weight: 900; color: var(--blue)">500+</div>
                  <div style="font-size: 0.85rem; color: var(--muted)">B2B Leads in 1 Week</div>
                </div>
              </div>
              <div>
                <div class="case-tag">Case Study 02 · B2B · Global Markets</div>
                <h2 style="font-family: Poppins, sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: 16px">Oakmont Axis</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px">
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: #ff6b6b; margin-bottom: 8px; font-size: 0.9rem">🔴 The Problem</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      No reliable B2B pipeline, poor targeting, manual prospecting wasting hours every week across global markets.
                    </p>
                  </div>
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: var(--blue); margin-bottom: 8px; font-size: 0.9rem">🔵 The Solution</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      AI-powered LinkedIn outreach, verified lead lists across 6 markets, automated email sequences with AI personalisation.
                    </p>
                  </div>
                </div>
                <div style="background: rgba(30, 144, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; margin-bottom: 20px">
                  <h4 style="font-family: Poppins, sans-serif; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px">📈 Results</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 16px">
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">500+</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Leads in 1 Week</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">80%</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Time Saved</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">+15%</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Pipeline Visibility</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">6</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Markets Covered</div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-primary" @click="openQuote">Let's achieve similar results →</button>
              </div>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="glass-card fade-in" style="margin-bottom: 32px">
            <div class="case-detail-grid portfolio-case-grid">
              <div style="display: flex; flex-direction: column; align-items: center">
                <div style="margin-bottom: 16px; height: 200px; display: flex; align-items: center; justify-content: center; padding-top: 20px">
                  <img
                    src="/assets/images/clients/insta-reach-uk.png"
                    alt="Insta Reach UK"
                    width="200"
                    height="120"
                    loading="lazy"
                    style="max-height: 100%; object-fit: contain; border-radius: 12px"
                  />
                </div>
                <div
                  style="
                    background: rgba(30, 144, 255, 0.08);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                  "
                >
                  <div style="color: var(--muted); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px">Result</div>
                  <div style="font-family: Poppins, sans-serif; font-size: 1.8rem; font-weight: 900; color: var(--blue)">+20%</div>
                  <div style="font-size: 0.85rem; color: var(--muted)">Campaign Efficiency</div>
                </div>
              </div>
              <div>
                <div class="case-tag">Case Study 03 · Digital Agency · Birmingham, UK</div>
                <h2 style="font-family: Poppins, sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: 16px">Insta Reach UK</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px">
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: #ff6b6b; margin-bottom: 8px; font-size: 0.9rem">🔴 The Problem</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      Digital marketing agency in Birmingham struggling with campaign efficiency, inconsistent client results, and lack of data-driven approach to measure ROI.
                    </p>
                  </div>
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: var(--blue); margin-bottom: 8px; font-size: 0.9rem">🔵 The Solution</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      AI-powered social media campaigns across Instagram, Facebook, and TikTok. Implemented data-backed content strategy, transparent reporting systems, and optimized SEO workflows.
                    </p>
                  </div>
                </div>
                <div style="background: rgba(30, 144, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; margin-bottom: 20px">
                  <h4 style="font-family: Poppins, sans-serif; font-size: 0.9rem; font-weight: 700; margin-bottom: 12px">📈 Results</h4>
                  <div style="display: flex; flex-wrap: wrap; gap: 16px">
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">+20%</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Efficiency Gain</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">2x</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Client Revenue</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">100%</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">KPIs Met</div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-primary" @click="openQuote">Let's achieve similar results →</button>
              </div>
            </div>
          </div>

          <!-- Case 4 -->
          <div class="glass-card fade-in" style="margin-bottom: 32px">
            <div class="case-detail-grid portfolio-case-grid">
              <div style="display: flex; flex-direction: column; align-items: center">
                <div
                  style="
                    margin-bottom: 16px;
                    height: 200px;
                    width: 100%;
                    background: linear-gradient(135deg, rgba(35, 43, 92, 0.05), rgba(224, 92, 38, 0.1));
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  "
                >
                  <img
                    src="/assets/images/Human Consultancy logo SVG file.svg"
                    alt="Human Consultancy"
                    width="160"
                    height="80"
                    loading="lazy"
                    style="max-height: 90%; object-fit: contain"
                  />
                </div>
                <div
                  style="
                    background: rgba(30, 144, 255, 0.08);
                    border: 1px solid var(--glass-border);
                    border-radius: 12px;
                    padding: 20px;
                    text-align: center;
                    width: 100%;
                  "
                >
                  <div style="color: var(--muted); font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px">Result</div>
                  <div style="font-family: Poppins, sans-serif; font-size: 1.8rem; font-weight: 900; color: var(--blue)">+30%</div>
                  <div style="font-size: 0.85rem; color: var(--muted)">Team Productivity</div>
                </div>
              </div>
              <div>
                <div class="case-tag">Case Study 04 · Consultancy · UAE</div>
                <h2 style="font-family: Poppins, sans-serif; font-size: 1.6rem; font-weight: 800; margin-bottom: 16px">Human Consultancy</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px">
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: #ff6b6b; margin-bottom: 8px; font-size: 0.9rem">🔴 The Problem</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      No systems, inconsistent workflows, lead nurture gaps across 15+ international clients.
                    </p>
                  </div>
                  <div>
                    <h4 style="font-family: Poppins, sans-serif; color: var(--blue); margin-bottom: 8px; font-size: 0.9rem">🔵 The Solution</h4>
                    <p style="color: var(--muted); font-size: 0.87rem; line-height: 1.7">
                      Built lead generation systems from scratch, automated CRM workflows, client SOPs, and recruitment pipelines.
                    </p>
                  </div>
                </div>
                <div style="background: rgba(30, 144, 255, 0.05); border: 1px solid var(--glass-border); border-radius: 12px; padding: 20px; margin-bottom: 20px">
                  <div style="display: flex; flex-wrap: wrap; gap: 16px">
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">+30%</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Productivity</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">15+</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Clients, 0% Churn</div>
                    </div>
                    <div style="text-align: center">
                      <div style="font-family: Poppins, sans-serif; font-weight: 900; color: var(--blue); font-size: 1.3rem">18 mo</div>
                      <div style="font-size: 0.75rem; color: var(--muted)">Systems Still Running</div>
                    </div>
                  </div>
                </div>
                <button type="button" class="btn-primary" @click="openQuote">Let's achieve similar results →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-case-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: start;
}

@media (max-width: 900px) {
  .portfolio-case-grid {
    grid-template-columns: 1fr;
  }
}
</style>
