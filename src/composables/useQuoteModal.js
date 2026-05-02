import { ref } from 'vue';

const quoteOpen = ref(false);

export function useQuoteModal() {
  function openQuote() {
    quoteOpen.value = true;
    document.body.style.overflow = 'hidden';
  }
  function closeQuote() {
    quoteOpen.value = false;
    document.body.style.overflow = '';
  }
  return { quoteOpen, openQuote, closeQuote };
}
