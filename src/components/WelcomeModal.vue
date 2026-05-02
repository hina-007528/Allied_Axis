<script setup>
import { ref, onMounted } from 'vue';

const open = ref(false);
onMounted(() => {
  if (!sessionStorage.getItem('welcomeSeen')) open.value = true;
});
function dismiss() {
  sessionStorage.setItem('welcomeSeen', 'true');
  open.value = false;
}
</script>

<template>
  <div
    v-show="open"
    id="welcome-modal"
    class="modal-overlay open"
    @click.self="dismiss"
  >
    <div class="modal-container" style="max-width: 640px" @click.stop>
      <div class="modal-close" @click="dismiss">✕</div>
      <div class="modal-header">
        <h2>Welcome to Allied Axis</h2>
        <p>We help businesses grow with high-converting digital systems and AI marketing.</p>
      </div>
      <p class="text-body" style="font-size: 0.95rem; line-height: 1.6; color: #d1d5db">
        Browse our case studies, request a quote, or book a B2B growth audit. We serve clients in
        the UAE, UK, and Pakistan.
      </p>
      <div style="display: flex; justify-content: flex-end; margin-top: 1rem">
        <button type="button" class="btn-primary" @click="dismiss">Get started</button>
      </div>
    </div>
  </div>
</template>
