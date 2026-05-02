<script setup>
import { ref } from 'vue';

const chatOpen = ref(false);
const input = ref('');
const messages = ref([
  {
    role: 'bot',
    text: "Hi! I'm the Allied Axis assistant. Ask me about services, pricing, timelines, or case studies!"
  }
]);

const chatAnswers = {
  hello: 'Welcome to Allied Axis. How can I help?',
  hi: 'Hello! What can I help you with?',
  services:
    'We offer launch packages ($980–$3,680), retainers, SEO, social, ads, and lead gen. Ask about pricing.',
  pricing:
    'Packages start at Essential $980, Growth $1,800, Complete $3,680. Monthly retainers from $490.',
  contact:
    'Email info@alliedaxis.digital or phone +92 325 1518471 — or use Request a Quotation.',
  leads: 'We have delivered 500+ B2B leads in a single week for clients like Oakmont Axis.',
  case: 'See Tourism, B2B, and Social case studies on our Portfolio page.'
};

function toggleChat() {
  chatOpen.value = !chatOpen.value;
}

function sendChat() {
  const text = input.value.trim();
  if (!text) return;
  messages.value.push({ role: 'user', text });
  input.value = '';
  setTimeout(() => {
    const lower = text.toLowerCase();
    let response =
      "I'm not sure — our team can help at info@alliedaxis.digital or use Request a Quotation.";
    for (const [key, val] of Object.entries(chatAnswers)) {
      if (lower.includes(key)) {
        response = val;
        break;
      }
    }
    messages.value.push({ role: 'bot', text: response });
  }, 500);
}
</script>

<template>
  <div>
    <div id="chat-bubble" class="chat-bubble" @click="toggleChat">
      {{ chatOpen ? '✕' : '💬' }}
    </div>
    <div id="chat-window" class="chat-window" :class="{ open: chatOpen }">
      <div class="chat-header">
        <div class="chat-dot" />
        <div>
          <div class="chat-title" style="font-family: Poppins, sans-serif; font-weight: 800">
            Allied Axis Assistant
          </div>
          <p>Online · Replies instantly</p>
        </div>
      </div>
      <div id="chat-messages" class="chat-messages">
        <div v-for="(m, i) in messages" :key="i" class="msg" :class="m.role">{{ m.text }}</div>
      </div>
      <div class="chat-input-row">
        <input
          v-model="input"
          type="text"
          placeholder="Type a message..."
          @keydown.enter.prevent="sendChat"
        />
        <button type="button" @click="sendChat">→</button>
      </div>
    </div>
  </div>
</template>
