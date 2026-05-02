<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const open = ref(false);
onMounted(() => {
  if (!localStorage.getItem('cookieConsent')) open.value = true;
});
function accept() {
  localStorage.setItem('cookieConsent', 'accepted');
  open.value = false;
}
function decline() {
  localStorage.setItem('cookieConsent', 'declined');
  open.value = false;
}
</script>

<template>
  <div id="cookie-banner" class="cookie-banner" :class="{ open }">
    <div class="cookie-content">
      <div class="cookie-text">
        We use cookies to improve your experience. By continuing you agree to our
        <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>.
      </div>
      <div class="cookie-buttons">
        <button type="button" class="cookie-btn accept" @click="accept">Accept</button>
        <button type="button" class="cookie-btn" @click="decline">Decline</button>
      </div>
    </div>
  </div>
</template>
