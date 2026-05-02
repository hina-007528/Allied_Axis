<script setup>
import { ref } from 'vue';
import { useQuoteModal } from '@/composables/useQuoteModal.js';
import { submitNetlifyForm, clearFieldErrorOnInput } from '@/composables/useNetlifyForm.js';

const { quoteOpen, closeQuote } = useQuoteModal();
const quoteForm = ref(null);
const msgOk = ref('');
const msgErr = ref('');
const busy = ref(false);

async function onSubmit() {
  msgOk.value = '';
  msgErr.value = '';
  const form = quoteForm.value;
  if (!form) return;
  busy.value = true;
  try {
    const res = await submitNetlifyForm(form, '/');
    if (res.ok) {
      msgOk.value = 'Thank you — we received your message and will reply within 24 hours.';
      form.reset();
    } else if (res.error) {
      msgErr.value = res.error;
      res.field?.focus();
    } else {
      msgErr.value = 'Something went wrong. Please email info@alliedaxis.digital.';
    }
  } finally {
    busy.value = false;
  }
}

function onOverlayClick(ev) {
  if (ev.target === ev.currentTarget) closeQuote();
}
</script>

<template>
  <div
    id="quote-modal"
    class="modal-overlay"
    :class="{ open: quoteOpen }"
    @click="onOverlayClick"
  >
    <div class="modal-container" @click.stop>
      <div class="modal-close" @click="closeQuote">✕</div>
      <div class="modal-header">
        <h2>Request a Quotation</h2>
        <p>Tell us about your project and we'll get back to you within 24 hours.</p>
      </div>
      <form
        ref="quoteForm"
        name="quote-request-home"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/"
        @input="clearFieldErrorOnInput"
        @change="clearFieldErrorOnInput"
        @submit.prevent="onSubmit"
      >
        <p class="hp" aria-hidden="true">
          <label>Do not fill: <input name="bot-field" autocomplete="off" tabindex="-1" /></label>
        </p>
        <div class="grid-2" style="gap: 16px">
          <div class="form-group">
            <label for="m-name">Full Name *</label
            ><input
              id="m-name"
              type="text"
              name="name"
              required
              minlength="2"
              maxlength="120"
              autocomplete="name"
            />
          </div>
          <div class="form-group">
            <label for="m-email">Email Address *</label
            ><input
              id="m-email"
              type="email"
              name="email"
              required
              autocomplete="email"
            />
          </div>
          <div class="form-group">
            <label for="m-phone">Phone Number</label
            ><input id="m-phone" type="tel" name="phone" autocomplete="tel" />
          </div>
          <div class="form-group">
            <label for="m-business">Business Name</label
            ><input id="m-business" type="text" name="business" maxlength="200" />
          </div>
        </div>
        <div class="form-group">
          <label for="m-service">Service Interested In</label>
          <select id="m-service" name="service">
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
        <div class="form-group">
          <label for="m-message">Message *</label>
          <textarea
            id="m-message"
            name="message"
            required
            minlength="10"
            maxlength="4000"
            placeholder="Briefly describe your goals..."
          />
        </div>
        <button
          type="submit"
          class="btn-primary"
          style="width: 100%; font-size: 1rem; padding: 16px"
          :disabled="busy"
        >
          {{ busy ? 'Sending…' : 'Send Quote Request →' }}
        </button>
        <p v-if="msgOk" class="form-msg success" role="status">{{ msgOk }}</p>
        <p v-if="msgErr" class="form-msg error" role="alert">{{ msgErr }}</p>
      </form>
    </div>
  </div>
</template>
