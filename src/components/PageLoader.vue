<script setup>
import { onMounted } from 'vue';
import { hidePageLoader } from '@/composables/useSiteChrome.js';

onMounted(() => {
  if (document.readyState === 'complete') hidePageLoader();
  else window.addEventListener('load', hidePageLoader, { once: true });
});
</script>

<template>
  <div id="page-loader" class="page-loader" aria-busy="true" aria-label="Loading">
    <div class="page-loader-inner" role="presentation" />
  </div>
</template>
