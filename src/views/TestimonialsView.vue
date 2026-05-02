<script setup>
import { useHead } from '@unhead/vue';

useHead({
  title: 'Client Testimonials – Allied Axis',
  meta: [
    {
      name: 'description',
      content:
        'Real client testimonials from UAE, UK, Pakistan. See what businesses say about our AI-powered growth systems and results.'
    }
  ]
});

const quotes = [
  {
    quote:
      '"Maryam transformed our business from zero online presence to a thriving booking engine. 18 deliverables in one month – the results speak for themselves!"',
    author: 'Affra Afzal',
    company: 'Affra Afzal Tourism · Dubai, UAE'
  },
  {
    quote:
      '"500+ qualified leads in a single week across 6 markets. The AI-powered system Maryam built has completely transformed how we generate business. Exceptional work."',
    author: 'Maheer',
    company: 'Oakmont Axis · Global'
  },
  {
    quote:
      '"Maryam brought real structure and strategy. 20% efficiency improvement and our team have never been more aligned. Highly recommend for any serious business."',
    author: 'Ali Azhar',
    company: 'Insta Reach UK · Birmingham'
  },
  {
    quote:
      '"The lead generation system built for us is still running 18 months later. Productivity up 30%, 15+ clients managed seamlessly. The systems were game-changing."',
    author: 'Ahmed Al-Rashidi',
    company: 'Human Consultancy · UAE'
  },
  {
    quote:
      '"Maryam doesn\'t just deliver services – she delivers results. Our social media went from 200 followers to thousands in months. The content strategy was brilliant."',
    author: 'Sara Malik',
    company: 'Startup Founder · Pakistan'
  }
];
</script>

<template>
  <div class="page">
    <section class="section">
      <div class="container">
        <div class="section-header center fade-in">
          <div class="section-label">Social Proof</div>
          <h1 class="section-title">What Clients Say</h1>
          <p class="section-sub">Real words from real businesses. Unedited, unscripted, undeniable.</p>
        </div>
        <div class="grid-2 fade-in" style="margin-bottom: 60px">
          <div v-for="(t, i) in quotes" :key="i" class="testi-card">
            <div class="stars">★★★★★</div>
            <p class="testi-quote">{{ t.quote }}</p>
            <div class="testi-author">{{ t.author }}</div>
            <div class="testi-company">{{ t.company }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
