<script setup>
/**
 * Hero ambient 3D: orbital rings + emissive orbs (brand orange / navy). Reduced-motion safe.
 */
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const root = ref(null);
let raf = 0;
let renderer;
let scene;
let camera;
let mainGroup;
let ro;
let clock;

function dispose() {
  cancelAnimationFrame(raf);
  raf = 0;
  ro?.disconnect();
  ro = undefined;
  clock = undefined;

  if (mainGroup) {
    mainGroup.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    mainGroup = undefined;
  }

  scene.fog = null;

  renderer?.dispose?.();
  if (root.value && renderer?.domElement?.parentNode === root.value) {
    root.value.removeChild(renderer.domElement);
  }
  renderer = undefined;
  scene = undefined;
  camera = undefined;
}

onMounted(() => {
  const el = root.value;
  if (!el) return;

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const w = Math.max(1, el.clientWidth);
  const h = Math.max(1, el.clientHeight);

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xf6f8fc, 5, 12);

  camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 100);
  camera.position.set(0, 0.2, 6.2);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  el.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.48));
  const key = new THREE.DirectionalLight(0xfff5f0, 0.55);
  key.position.set(3.5, 5, 4);
  scene.add(key);
  const rim = new THREE.PointLight(0x8ba4ff, 0.38, 22, 2);
  rim.position.set(-3.2, 0.6, 2);
  scene.add(rim);

  mainGroup = new THREE.Group();
  scene.add(mainGroup);

  const torusMat = (color, opacity, emissiveIntensity) =>
    new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity,
      metalness: 0.35,
      roughness: 0.42,
      transparent: true,
      opacity,
      side: THREE.DoubleSide
    });

  const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.05, 0.014, 12, 96), torusMat(0xe05c26, 0.38, 0.2));
  ringA.rotation.x = Math.PI / 2.15;
  ringA.rotation.y = 0.35;
  mainGroup.add(ringA);

  const ringB = new THREE.Mesh(new THREE.TorusGeometry(1.45, 0.012, 12, 80), torusMat(0x3d4e8f, 0.28, 0.12));
  ringB.rotation.x = Math.PI / 2.45;
  ringB.rotation.z = 0.55;
  mainGroup.add(ringB);

  const n = 8;
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const geo = new THREE.SphereGeometry(0.08, 14, 14);
    const mat = new THREE.MeshStandardMaterial({
      color: i % 2 === 0 ? 0xe05c26 : 0x4a6fc5,
      emissive: i % 2 === 0 ? 0xe05c26 : 0x4a6fc5,
      emissiveIntensity: 0.45,
      metalness: 0.25,
      roughness: 0.5,
      transparent: true,
      opacity: 0.88
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(Math.cos(t) * 2.15, Math.sin(t * 1.3) * 0.35, Math.sin(t) * 2.15);
    mainGroup.add(m);
  }

  const dustN = 40;
  const dustPos = new Float32Array(dustN * 3);
  for (let i = 0; i < dustN; i++) {
    dustPos[i * 3] = (Math.random() - 0.5) * 6.5;
    dustPos[i * 3 + 1] = (Math.random() - 0.5) * 2;
    dustPos[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  const dust = new THREE.Points(
    dustGeo,
    new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.022,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
      sizeAttenuation: true
    })
  );
  mainGroup.add(dust);

  clock = new THREE.Clock();
  function tick() {
    raf = requestAnimationFrame(tick);
    if (!mainGroup || !clock || !renderer) return;
    const t = clock.getElapsedTime();
    mainGroup.rotation.y = t * 0.06;
    mainGroup.rotation.x = Math.sin(t * 0.12) * 0.05;
    ringA.rotation.z = t * 0.04;
    ringB.rotation.y = -t * 0.035;
    dust.rotation.y = t * 0.02;
    renderer.render(scene, camera);
  }
  tick();

  ro = new ResizeObserver(() => {
    if (!el || !camera || !renderer) return;
    const ew = Math.max(1, el.clientWidth);
    const eh = Math.max(1, el.clientHeight);
    camera.aspect = ew / eh;
    camera.updateProjectionMatrix();
    renderer.setSize(ew, eh);
  });
  ro.observe(el);
});

onUnmounted(dispose);
</script>

<template>
  <div ref="root" class="hero-backdrop-three" aria-hidden="true" />
</template>
