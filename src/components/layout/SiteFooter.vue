<script setup>
import { RouterLink } from 'vue-router';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import LogoThree from '@/components/LogoThree.vue';

const { openQuote } = useQuoteModal();
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div>
          <RouterLink class="footer-logo footer-logo--3d" to="/" aria-label="Allied Axis — Home">
            <span class="footer-logo-3d-wrap" aria-hidden="true">
              <LogoThree />
            </span>
          </RouterLink>
          <p class="footer-tagline">
            AI‑Powered Digital Growth Agency. From zero to revenue‑ready. UAE · UK · Pakistan.
          </p>
          <div class="social-links">
            <a
              href="https://www.linkedin.com/company/allied-axis/"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="LinkedIn"
              aria-label="LinkedIn"
              ><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/allied_axis"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="Instagram"
              aria-label="Instagram"
              ><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@allied_axis?"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="TikTok"
              aria-label="TikTok"
              ><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path
                  d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.09-.26-.18-.38-.28v6.4c0 1.17-.13 2.35-.55 3.42-.91 2.31-3.04 4.01-5.5 4.45-1.58.28-3.23.14-4.73-.42-2.31-.85-4.11-3.06-4.59-5.49-.33-1.74-.08-3.59.73-5.13.91-1.73 2.59-3.07 4.54-3.57.36-.09.73-.15 1.1-.18v4.03c-.04.01-.07.01-.11.02-.75.14-1.51.53-2.01 1.12-.5.59-.76 1.34-.78 2.11-.03 1.02.4 2.06 1.25 2.64.84.58 1.95.66 2.85.28 1.02-.43 1.74-1.51 1.74-2.62.01-2.98.01-5.97.01-8.96.02-.02.04-.04.07-.07z"
                />
              </svg>
            </a>
            <a
              href="https://wa.me/923251518471?text=Hi%2C%20I%20want%20to%20discuss%20my%20business%20growth."
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
              title="WhatsApp"
              aria-label="WhatsApp"
              ><svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><RouterLink to="/services">Essential Launch</RouterLink></li>
            <li><RouterLink to="/services">Growth Launch</RouterLink></li>
            <li><RouterLink to="/services">Complete Launch</RouterLink></li>
            <li><RouterLink to="/services">SEO Retainer</RouterLink></li>
            <li><RouterLink to="/services">Social Media Mgmt</RouterLink></li>
            <li><RouterLink to="/b2b-lead-generation">B2B Lead Generation</RouterLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/portfolio">Portfolio</RouterLink></li>
            <li><RouterLink to="/team">Team</RouterLink></li>
            <li><RouterLink to="/blog">Blog</RouterLink></li>
            <li><RouterLink to="/testimonials">Testimonials</RouterLink></li>
            <li><RouterLink to="/faq">FAQs</RouterLink></li>
            <li><RouterLink to="/terms">Terms</RouterLink></li>
            <li><RouterLink to="/privacy-policy">Privacy</RouterLink></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <div class="footer-contact">
            <p>✉️ info@alliedaxis.digital</p>
            <p>📞 +92 325 1518471</p>
            <p>🌍 UAE · UK · Pakistan</p>
          </div>
          <button type="button" class="btn-primary" style="margin-top: 16px; font-size: 0.82rem; padding: 10px 20px" @click="openQuote">
            Request a Quotation →
          </button>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Allied Axis. All rights reserved. AI‑Powered Digital Growth Agency.</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap">
          <RouterLink to="/terms">Terms of Service</RouterLink>
          <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
