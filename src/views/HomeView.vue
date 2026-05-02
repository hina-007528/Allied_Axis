<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { RouterLink } from 'vue-router';
import { useHead } from '@unhead/vue';
import gsap from 'gsap';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';
import HeroBackdropThree from '@/components/HeroBackdropThree.vue';

const { openQuote } = useQuoteModal();

const heroSection = ref(null);
let gsapHeroCtx;

const auditForm = ref(null);
const auditOk = ref('');
const auditErr = ref('');
const busyAudit = ref(false);
const homeForm = ref(null);
const homeOk = ref('');
const homeErr = ref('');
const busyHome = ref(false);

const statConfig = [
  { target: 15, suffix: '+', label: 'Clients Served' },
  { target: 500, suffix: '+', label: 'Leads Generated' },
  { target: 98, suffix: '%', label: 'Client Satisfaction' },
  { target: 19, suffix: '+', label: 'Global Markets' }
];
const statDisplay = ref(statConfig.map(() => 0));
let statsObs;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function runStatAnimation() {
  const duration = 1600;
  const start = performance.now();
  const from = statDisplay.value.slice();
  function frame(now) {
    const p = easeOutCubic(Math.min(1, (now - start) / duration));
    statDisplay.value = statConfig.map((s, i) => from[i] + (s.target - from[i]) * p);
    if (p < 1) requestAnimationFrame(frame);
    else statDisplay.value = statConfig.map((s) => s.target);
  }
  requestAnimationFrame(frame);
}

const faqOpen = ref(null);
const faqs = [
  {
    q: 'How do you start a new project?',
    a:
      'We begin every new project with a discovery phase, understanding your business goals, target audience, and challenges. From there, we craft a tailored strategy and roadmap to ensure measurable results and successful execution.'
  },
  {
    q: 'Can you work with small businesses?',
    a:
      'Absolutely! Allied Axis works with businesses of all sizes. We create customized strategies that fit your budget and goals, helping small businesses grow and thrive online.'
  },
  {
    q: 'Will I be involved in the process?',
    a:
      'Absolutely! At Allied Axis, we keep you involved at every stage, from strategy planning to execution, ensuring your vision and feedback shape the final results.'
  },
  {
    q: 'How do you measure campaign success?',
    a:
      'We measure campaign success using key metrics such as website traffic, lead generation, conversions, engagement rates, and ROI, ensuring every strategy delivers measurable results.'
  }
];

const orgLdJson = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Allied Axis',
  url: 'https://allied-axis.netlify.app/',
  logo: 'https://allied-axis.netlify.app/assets/images/logo/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/allied-axis/',
    'https://www.instagram.com/allied_axis',
    'https://www.tiktok.com/@allied_axis'
  ],
  areaServed: ['AE', 'GB', 'PK'],
  description:
    'AI marketing, lead generation, and digital growth for businesses in the UAE, UK, and Pakistan.',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Digital launch packages' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO and content retainers' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'B2B lead generation' } }
    ]
  }
});

useHead({
  title: 'Allied Axis – AI-Powered Digital Growth Agency | UAE, UK, Pakistan',
  meta: [
    {
      name: 'description',
      content:
        'Allied Axis is an AI-powered digital growth agency helping brands in UAE, UK & Pakistan with AI marketing, lead generation & complete digital ecosystems.'
    },
    {
      property: 'og:title',
      content: 'Allied Axis – AI-Powered Digital Growth Agency | UAE, UK, Pakistan'
    },
    {
      property: 'og:description',
      content:
        'Allied Axis is an AI-powered digital growth agency helping brands in UAE, UK & Pakistan with AI marketing, lead generation & complete digital ecosystems.'
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://allied-axis.netlify.app/' },
    {
      property: 'og:image',
      content: 'https://allied-axis.netlify.app/assets/images/social/allied-axis-og.png'
    },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:site_name', content: 'Allied Axis' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  script: [{ type: 'application/ld+json', children: orgLdJson }],
  link: [{ rel: 'canonical', href: 'https://allied-axis.netlify.app/' }]
});

async function submitAudit() {
  auditOk.value = '';
  auditErr.value = '';
  const form = auditForm.value;
  if (!form) return;
  busyAudit.value = true;
  try {
    const res = await submitNetlifyForm(form, '/');
    if (res.ok) {
      auditOk.value = "✓ We'll send your audit within 24 hours!";
      form.reset();
    } else if (res.error) {
      auditErr.value = res.error;
      res.field?.focus();
    } else auditErr.value = 'Submission failed. Try again or email info@alliedaxis.digital.';
  } finally {
    busyAudit.value = false;
  }
}

async function submitHomeContact() {
  homeOk.value = '';
  homeErr.value = '';
  const form = homeForm.value;
  if (!form) return;
  busyHome.value = true;
  try {
    const res = await submitNetlifyForm(form, '/');
    if (res.ok) {
      homeOk.value = 'Thanks — we received your message and will reply within 24 hours.';
      form.reset();
    } else if (res.error) {
      homeErr.value = res.error;
      res.field?.focus();
    } else homeErr.value = 'Submission failed. Try again or email info@alliedaxis.digital.';
  } finally {
    busyHome.value = false;
  }
}

onMounted(() => {
  const el = document.getElementById('home-stats');
  if (!el || typeof IntersectionObserver === 'undefined') {
    runStatAnimation();
  } else {
    statsObs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          runStatAnimation();
          statsObs?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    statsObs.observe(el);
  }

  nextTick(() => {
    const motionOk = !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const section = heroSection.value;
    if (!section) return;

    if (motionOk) {
      gsapHeroCtx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('.hero .hero-reveal-title', {
          opacity: 0,
          y: 46,
          duration: 0.92
        })
          .from(
            '.hero .hero-reveal-sub',
            { opacity: 0, y: 30, duration: 0.74 },
            '-=0.62'
          )
          .from(
            '.hero .hero-reveal-cta',
            { opacity: 0, y: 22, duration: 0.58 },
            '-=0.48'
          )
          .from(
            '.hero .hero-reveal-stats .stat-item',
            { opacity: 0, y: 20, duration: 0.48, stagger: 0.09 },
            '-=0.42'
          )
          .from(
            '.hero .hero-reveal-card',
            { opacity: 0, x: 42, scale: 0.94, duration: 0.82, ease: 'power2.out' },
            '-=0.68'
          );

        gsap.to('.hero .hero-visual', {
          y: -6,
          duration: 3.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });

        gsap.to('.hero .hero-mesh', {
          opacity: 0.92,
          duration: 4.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      }, heroSection);

      const card = section.querySelector('.hero-reveal-card');
      if (card) {
        gsap.set(card, { transformPerspective: 1000 });
        const narrow = window.matchMedia?.('(max-width: 768px)')?.matches;
        const tiltX = narrow ? 5 : 9;
        const tiltY = narrow ? 6 : 11;
        const setRotX = gsap.quickTo(card, 'rotationX', { duration: 0.55, ease: 'power2.out' });
        const setRotY = gsap.quickTo(card, 'rotationY', { duration: 0.55, ease: 'power2.out' });
        const onMove = (e) => {
          const r = section.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          setRotX(-ny * tiltX);
          setRotY(nx * tiltY);
        };
        const onLeave = () => {
          setRotX(0);
          setRotY(0);
        };
        section.addEventListener('pointermove', onMove);
        section.addEventListener('pointerleave', onLeave);
        heroPointerCleanup = () => {
          section.removeEventListener('pointermove', onMove);
          section.removeEventListener('pointerleave', onLeave);
        };
      }
    }
  });
});

onUnmounted(() => {
  statsObs?.disconnect();
  heroPointerCleanup?.();
  heroPointerCleanup = undefined;
  gsapHeroCtx?.revert();
  gsapHeroCtx = undefined;
});
</script>

<template>
  <div class="page page-home">
    <section ref="heroSection" class="hero hero--experience">
      <div class="hero-mesh" aria-hidden="true" />
      <HeroBackdropThree />
      <div class="container hero-layout">
        <div class="hero-text-load">
          <h1 class="home-hero-title hero-reveal-title">
            Struggling to get leads?<br />
            <span class="accent">Brand invisible online?</span><br />
            Wasting money on ads?
          </h1>
          <p class="hero-sub hero-reveal-sub">
            We build AI-powered digital systems that generate <strong>qualified leads</strong> and turn
            your brand into a client-attracting machine.
          </p>
          <div class="btn-group hero-reveal-cta">
            <button type="button" class="btn-primary hero-cta-pulse" @click="openQuote">
              Start Your Launch →
            </button>
            <RouterLink to="/portfolio" class="btn-secondary">View Case Studies</RouterLink>
          </div>
          <div id="home-stats" class="stats-row hero-reveal-stats" aria-label="Key metrics">
            <div v-for="(s, i) in statConfig" :key="s.label" class="stat-item">
              <div class="stat-num">
                <span class="counter-num">{{ Math.round(statDisplay[i]) }}</span><span>{{ s.suffix }}</span>
              </div>
              <div class="stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-card hero-reveal-card">
            <div class="hero-card-title">Live Results Dashboard</div>
            <div class="hero-metric">
              <span class="metric-dot" />
              <span class="metric-text">B2B Leads – Oakmont Axis</span>
              <span class="metric-val">500+</span>
            </div>
            <div class="hero-metric">
              <span class="metric-dot" style="background: #25d366" />
              <span class="metric-text">Affra Afzal – Month 1</span>
              <span class="metric-val">50 leads</span>
            </div>
            <div class="hero-metric">
              <span class="metric-dot" style="background: #f0b429" />
              <span class="metric-text">Campaign Efficiency Gain</span>
              <span class="metric-val">+20%</span>
            </div>
            <div class="hero-metric">
              <span class="metric-dot" style="background: #a855f7" />
              <span class="metric-text">Human Consultancy Productivity</span>
              <span class="metric-val">+30%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip fade-in" aria-label="Client logos">
      <div class="container">
        <p>Trusted by teams across <strong>UAE</strong> · <strong>UK</strong> · <strong>Pakistan</strong></p>
        <div class="marquee-container">
          <div class="client-logos">
            <div class="client-logo">
              <img
                src="/assets/images/clients/affra-afzal-tourism.jpg"
                alt="Affra Afzal Tourism logo"
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              /><span>Affra Afzal Tourism</span>
            </div>
            <div class="client-logo">
              <img
                src="/assets/images/clients/oakmont-axis.jpg"
                alt="Oakmont Axis logo"
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              /><span>Oakmont Axis</span>
            </div>
            <div class="client-logo">
              <img
                src="/assets/images/clients/insta-reach-uk.png"
                alt="Insta Reach UK logo"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              /><span>Insta Reach UK</span>
            </div>
            <div class="client-logo logo-text">
              <img
                src="/assets/images/Human Consultancy logo SVG file.svg"
                alt="Human Consultancy logo"
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
              /><span>Human Consultancy</span>
            </div>
          </div>
          <div class="client-logos" aria-hidden="true">
            <div class="client-logo">
              <img
                src="/assets/images/clients/affra-afzal-tourism.jpg"
                alt=""
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              /><span>Affra Afzal Tourism</span>
            </div>
            <div class="client-logo">
              <img
                src="/assets/images/clients/oakmont-axis.jpg"
                alt=""
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
              /><span>Oakmont Axis</span>
            </div>
            <div class="client-logo">
              <img
                src="/assets/images/clients/insta-reach-uk.png"
                alt=""
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              /><span>Insta Reach UK</span>
            </div>
            <div class="client-logo logo-text">
              <img
                src="/assets/images/Human Consultancy logo SVG file.svg"
                alt=""
                width="32"
                height="32"
                loading="lazy"
                decoding="async"
              /><span>Human Consultancy</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">What We Do</div>
          <h2 class="section-title">From Zero to Revenue-Ready</h2>
          <p class="section-sub">
            Every service is engineered to solve a real business problem – not just look good.
          </p>
        </div>
        <div class="grid-3">
          <article class="glass-card fade-in">
            <div class="card-icon" aria-hidden="true">🚀</div>
            <h3 style="font-family: Poppins, sans-serif; font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--navy)">
              Digital Launch Strategy
            </h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1rem">
              Complete brand identity, website, and go-to-market plan. From domain to your first paying
              client.
            </p>
            <RouterLink class="case-link" to="/services">Explore Services →</RouterLink>
          </article>
          <article class="glass-card fade-in">
            <div class="card-icon" aria-hidden="true">🤖</div>
            <h3 style="font-family: Poppins, sans-serif; font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--navy)">
              AI Marketing Automation
            </h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1rem">
              20% efficiency gains and 3× content output using AI-powered workflows. Work smarter, not harder.
            </p>
            <RouterLink class="case-link" to="/services">Explore Services →</RouterLink>
          </article>
          <article class="glass-card fade-in">
            <div class="card-icon" aria-hidden="true">🎯</div>
            <h3 style="font-family: Poppins, sans-serif; font-size: 1.15rem; font-weight: 800; margin-bottom: 0.75rem; color: var(--navy)">
              Lead Generation Systems
            </h3>
            <p style="color: var(--text-light); font-size: 0.92rem; line-height: 1.65; margin-bottom: 1rem">
              500+ qualified leads per week through AI-powered LinkedIn outreach, verified lists, and
              automated sequences.
            </p>
            <RouterLink class="case-link" to="/b2b-lead-generation">Explore B2B →</RouterLink>
          </article>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Why Allied Axis</div>
          <h2 class="section-title">Built Different. Proven Results.</h2>
        </div>
        <div class="grid-4">
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px" aria-hidden="true">⚡</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px; color: var(--navy)">
              Fast Execution
            </h4>
            <p style="color: var(--muted); font-size: 0.85rem">Ready to launch in weeks, not months.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px" aria-hidden="true">🤖</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px; color: var(--navy)">
              AI-Powered Systems
            </h4>
            <p style="color: var(--muted); font-size: 0.85rem">Automation at scale – not traditional marketing.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px" aria-hidden="true">🔗</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px; color: var(--navy)">
              End-to-End Solution
            </h4>
            <p style="color: var(--muted); font-size: 0.85rem">No freelancers needed – complete ecosystem.</p>
          </div>
          <div class="glass-card fade-in" style="text-align: center">
            <div style="font-size: 2rem; margin-bottom: 14px" aria-hidden="true">🌍</div>
            <h4 style="font-family: Poppins, sans-serif; font-weight: 700; margin-bottom: 8px; color: var(--navy)">
              International Experience
            </h4>
            <p style="color: var(--muted); font-size: 0.85rem">UAE, UK, Pakistan – 3+ years proven results.</p>
          </div>
        </div>
        <div style="text-align: center; margin-top: 48px" class="fade-in">
          <button type="button" class="btn-primary" @click="openQuote">Start Your Journey →</button>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Proof of Work</div>
          <h2 class="section-title">Real Results. Real Clients.</h2>
        </div>
        <div class="grid-3">
          <article class="case-card fade-in">
            <div class="case-img" aria-hidden="true">✈️</div>
            <div class="case-body">
              <div class="case-tag">Tourism · Dubai</div>
              <div class="case-result">50+ Qualified Leads in Month 1</div>
              <p class="case-desc">
                Zero digital presence to fully operational. 18 deliverables, first revenue in weeks.
              </p>
              <RouterLink to="/portfolio" class="case-link">Read Full Case Study →</RouterLink>
            </div>
          </article>
          <article class="case-card fade-in">
            <div class="case-img" aria-hidden="true">📊</div>
            <div class="case-body">
              <div class="case-tag">B2B · Global</div>
              <div class="case-result">500+ Leads in 1 Week</div>
              <p class="case-desc">
                AI-powered LinkedIn outreach across 6 markets. 80% time saved, +15% pipeline visibility.
              </p>
              <RouterLink to="/portfolio" class="case-link">Read Full Case Study →</RouterLink>
            </div>
          </article>
          <article class="case-card fade-in">
            <div class="case-img" aria-hidden="true">📱</div>
            <div class="case-body">
              <div class="case-tag">Social · UK</div>
              <div class="case-result">20% Campaign Efficiency Gain</div>
              <p class="case-desc">
                AI-powered social campaigns, data-backed content strategy, KPIs consistently met.
              </p>
              <RouterLink to="/portfolio" class="case-link">Read Full Case Study →</RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Pricing</div>
          <h2 class="section-title">Simple, Transparent Packages</h2>
          <p class="section-sub">40% below UAE market average. No hidden fees. Full ownership.</p>
        </div>
        <div class="pricing-grid">
          <div class="price-card fade-in" style="display: flex; flex-direction: column">
            <div style="flex: 1">
              <div class="price-name">Essential Launch</div>
              <div class="price-amount"><sup>$</sup>980</div>
              <p style="color: var(--muted); font-size: 0.85rem; margin-bottom: 8px">Everything you need to go live.</p>
              <ul class="price-features">
                <li>Logo & Brand Identity</li>
                <li>Business Cards & Letterhead</li>
                <li>5-Page Professional Website</li>
                <li>Professional Email Setup</li>
                <li>Basic Social Accounts Setup</li>
              </ul>
            </div>
            <button type="button" class="btn-primary" style="width: 100%; margin-top: 20px" @click="openQuote">
              Get Started
            </button>
          </div>
          <div class="price-card featured fade-in" style="display: flex; flex-direction: column">
            <div style="flex: 1">
              <div class="price-name">Growth Launch</div>
              <div class="price-amount"><sup>$</sup>1,800</div>
              <p style="color: var(--muted); font-size: 0.85rem; margin-bottom: 8px">Essential + content & strategy.</p>
              <ul class="price-features">
                <li>Everything in Essential</li>
                <li>30-Day Content Calendar</li>
                <li>10 Reel Scripts</li>
                <li>Digital Strategy Document</li>
              </ul>
            </div>
            <button type="button" class="btn-primary" style="width: 100%; margin-top: 20px" @click="openQuote">
              Get Started
            </button>
          </div>
          <div class="price-card fade-in" style="display: flex; flex-direction: column">
            <div style="flex: 1">
              <div class="price-name">Complete Launch</div>
              <div class="price-amount"><sup>$</sup>3,680</div>
              <p style="color: var(--muted); font-size: 0.85rem; margin-bottom: 8px">Full ecosystem, total growth.</p>
              <ul class="price-features">
                <li>Everything in Growth</li>
                <li>Lead Generation System</li>
                <li>Stock Media Library</li>
                <li>Full Brand Guidelines</li>
                <li>2 Content Calendars</li>
                <li>1-Month Social Media Management</li>
              </ul>
            </div>
            <button type="button" class="btn-primary" style="width: 100%; margin-top: 20px" @click="openQuote">
              Get Started
            </button>
          </div>
        </div>
        <div style="text-align: center; margin-top: 24px">
          <RouterLink class="btn-secondary" to="/services" style="display: inline-block">View All Packages & Retainers →</RouterLink>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="lead-banner fade-in">
          <div class="section-label" style="margin-bottom: 14px">Free Resource</div>
          <h2>Get Your <span style="color: var(--blue)">Free Website Audit</span></h2>
          <p>A custom report on exactly how to improve your conversions, SEO, and lead generation.</p>
          <form
            ref="auditForm"
            name="lead-audit"
            class="lead-form"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/"
            aria-label="Get free website audit"
            @input="clearFieldErrorOnInput"
            @change="clearFieldErrorOnInput"
            @submit.prevent="submitAudit"
          >
            <p class="hp" aria-hidden="true">
              <label>Do not fill: <input name="bot-field" autocomplete="off" tabindex="-1" /></label>
            </p>
            <input
              id="audit-email"
              type="email"
              name="email"
              required
              autocomplete="email"
              placeholder="Enter your email address"
              aria-label="Email address"
            />
            <button type="submit" class="btn-primary" :disabled="busyAudit">
              {{ busyAudit ? 'Sending…' : 'Send Me the Audit →' }}
            </button>
          </form>
          <p v-if="auditOk" class="form-msg success" role="status">{{ auditOk }}</p>
          <p v-if="auditErr" class="form-msg error" role="alert">{{ auditErr }}</p>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">FAQ</div>
          <h2 class="section-title">Quick Answers</h2>
        </div>
        <div style="max-width: 720px; margin: 0 auto">
          <div class="faq-list">
            <div v-for="(item, i) in faqs" :key="i" class="faq-item fade-in">
              <button type="button" class="faq-q" :aria-expanded="faqOpen === i" @click="faqOpen = faqOpen === i ? null : i">
                <span>{{ item.q }}</span>
                <span class="faq-icon">{{ faqOpen === i ? '−' : '+' }}</span>
              </button>
              <div class="faq-a" :class="{ open: faqOpen === i }">
                <p>{{ item.a }}</p>
              </div>
            </div>
          </div>
        </div>
        <div style="text-align: center; margin-top: 28px">
          <RouterLink class="btn-secondary" to="/faq" style="display: inline-block">View All FAQs →</RouterLink>
        </div>
      </div>
    </section>

    <div class="section-rule" role="presentation" />

    <section class="section" id="contact-home" style="padding-top: 0">
      <div class="container" style="max-width: 640px">
        <div class="section-header center fade-in">
          <div class="section-label">Get In Touch</div>
          <h2 class="section-title">Let's Build Your Growth System</h2>
          <p class="section-sub">Tell us about your business and we'll craft a custom strategy – free.</p>
        </div>
        <form
          ref="homeForm"
          name="home-contact"
          class="glass-card fade-in"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/"
          aria-label="Contact form"
          @input="clearFieldErrorOnInput"
          @change="clearFieldErrorOnInput"
          @submit.prevent="submitHomeContact"
        >
          <p class="hp" aria-hidden="true">
            <label>Do not fill: <input name="bot-field" autocomplete="off" tabindex="-1" /></label>
          </p>
          <div class="grid-2" style="gap: 16px">
            <div class="form-group">
              <label for="hc-name">Full Name</label>
              <input
                id="hc-name"
                type="text"
                name="name"
                required
                minlength="2"
                maxlength="120"
                autocomplete="name"
                placeholder="Your name"
              />
            </div>
            <div class="form-group">
              <label for="hc-email">Email Address</label>
              <input
                id="hc-email"
                type="email"
                name="email"
                required
                autocomplete="email"
                placeholder="you@company.com"
              />
            </div>
            <div class="form-group">
              <label for="hc-business">Business Name</label>
              <input id="hc-business" type="text" name="business" maxlength="200" placeholder="Your company" />
            </div>
            <div class="form-group">
              <label for="hc-service">Service Interested In</label>
              <select id="hc-service" name="service">
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
            <label for="hc-msg">Message</label>
            <textarea
              id="hc-msg"
              name="message"
              required
              minlength="10"
              maxlength="4000"
              rows="5"
              placeholder="Tell us about your business goals and challenges..."
            />
          </div>
          <button type="submit" class="btn-primary" style="width: 100%; font-size: 1rem; padding: 16px" :disabled="busyHome">
            {{ busyHome ? 'Sending…' : 'Send Message – Request a Quotation →' }}
          </button>
          <p v-if="homeOk" class="form-msg success" role="status">{{ homeOk }}</p>
          <p v-if="homeErr" class="form-msg error" role="alert">{{ homeErr }}</p>
        </form>
      </div>
    </section>
  </div>
</template>
