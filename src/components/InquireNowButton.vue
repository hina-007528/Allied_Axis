<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
  /** Stagger entrance animation across service cards */
  staggerIndex: { type: Number, default: 0 }
});

const emit = defineEmits(['click']);

const root = ref(null);
const arrow = ref(null);
const shine = ref(null);

const SHADOW_IDLE =
  '0 6px 22px rgba(224, 92, 38, 0.28), 0 2px 8px rgba(35, 43, 92, 0.08)';
const SHADOW_HOVER =
  '0 14px 40px rgba(224, 92, 38, 0.38), 0 6px 16px rgba(35, 43, 92, 0.1)';

let motionOk = true;

onMounted(() => {
  motionOk = !window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
  const el = root.value;
  if (!el) return;

  if (motionOk) {
    if (shine.value) gsap.set(shine.value, { x: '-130%', skewX: -16 });
    gsap.from(el, {
      opacity: 0,
      y: 20,
      duration: 0.62,
      ease: 'power3.out',
      delay: props.staggerIndex * 0.055
    });
  }
});

function handleEnter() {
  if (!motionOk || !root.value) return;
  gsap.killTweensOf([root.value, arrow.value, shine.value].filter(Boolean));
  gsap.to(root.value, {
    scale: 1.03,
    y: -3,
    duration: 0.42,
    ease: 'power2.out'
  });
  gsap.to(root.value, {
    boxShadow: SHADOW_HOVER,
    duration: 0.42,
    ease: 'power2.out'
  });
  if (arrow.value) {
    gsap.to(arrow.value, { x: 8, duration: 0.38, ease: 'power2.out' });
  }
  if (shine.value) {
    gsap.fromTo(
      shine.value,
      { x: '-130%' },
      { x: '130%', duration: 0.85, ease: 'power2.inOut' }
    );
  }
}

function handleLeave() {
  if (!motionOk || !root.value) return;
  gsap.killTweensOf([root.value, arrow.value, shine.value].filter(Boolean));
  gsap.to(root.value, {
    scale: 1,
    y: 0,
    duration: 0.45,
    ease: 'power2.out'
  });
  gsap.to(root.value, {
    boxShadow: SHADOW_IDLE,
    duration: 0.45,
    ease: 'power2.out'
  });
  if (arrow.value) gsap.to(arrow.value, { x: 0, duration: 0.38, ease: 'power2.out' });
  if (shine.value) gsap.set(shine.value, { x: '-130%' });
}

function handleClick() {
  emit('click');
}
</script>

<template>
  <button
    ref="root"
    type="button"
    class="inquire-now-btn"
    @click="handleClick"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
  >
    <span ref="shine" class="inquire-now-btn__shine" aria-hidden="true" />
    <span class="inquire-now-btn__content">
      <span class="inquire-now-btn__label">Inquire Now</span>
      <span ref="arrow" class="inquire-now-btn__arrow">→</span>
    </span>
  </button>
</template>

<style scoped>
.inquire-now-btn {
  position: relative;
  margin-top: auto;
  width: 100%;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: var(--radius-md, 14px);
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 0.94rem;
  letter-spacing: -0.02em;
  color: #fff;
  background: linear-gradient(165deg, var(--blue, #e05c26) 0%, #c8511f 50%, #b3471c 100%);
  box-shadow: 0 6px 22px rgba(224, 92, 38, 0.28), 0 2px 8px rgba(35, 43, 92, 0.08);
}

.inquire-now-btn:focus-visible {
  outline: 2px solid var(--blue, #e05c26);
  outline-offset: 3px;
}

.inquire-now-btn:active:not(:disabled) {
  transform: scale(0.98);
}

.inquire-now-btn__shine {
  position: absolute;
  top: -10%;
  left: 0;
  width: 55%;
  height: 120%;
  background: linear-gradient(
    105deg,
    transparent 0%,
    rgba(255, 255, 255, 0.28) 42%,
    transparent 88%
  );
  pointer-events: none;
  transform: skewX(-18deg);
  opacity: 0.95;
}

.inquire-now-btn__content {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 22px;
}

.inquire-now-btn__arrow {
  display: inline-block;
  font-weight: 800;
  line-height: 1;
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .inquire-now-btn {
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;
  }

  .inquire-now-btn__arrow {
    transition: transform 0.25s ease;
  }

  .inquire-now-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 36px rgba(224, 92, 38, 0.35);
  }

  .inquire-now-btn:hover .inquire-now-btn__arrow {
    transform: translateX(6px);
  }

  .inquire-now-btn__shine {
    display: none;
  }
}
</style>
