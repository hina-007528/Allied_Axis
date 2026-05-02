<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

const root = ref(null);
const useStatic = ref(false);
let frame = 0;
let renderer;
let scene;
let camera;
let logoGroup;
let particles;
let ro;
let texture;
let mouseMoveHandler;

/** Navbar logo canvas — sized to read clearly in the header */
const CFG = {
  fov: 34,
  camZ: 2.95,
  planeW: 4,
  planeH: 2,
  particles: 12,
  particleSize: 0.042
};

function dispose() {
  if (mouseMoveHandler) {
    window.removeEventListener('mousemove', mouseMoveHandler);
    mouseMoveHandler = null;
  }
  cancelAnimationFrame(frame);
  ro?.disconnect();
  texture?.dispose?.();
  if (particles) {
    particles.geometry?.dispose?.();
    particles.material?.dispose?.();
    particles = undefined;
  }
  if (logoGroup) {
    logoGroup.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
      if (o.material) {
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material.dispose();
      }
    });
    logoGroup = undefined;
  }
  renderer?.dispose?.();
  if (root.value && renderer?.domElement?.parentNode === root.value) {
    root.value.removeChild(renderer.domElement);
  }
  renderer = undefined;
  scene = undefined;
  camera = undefined;
}

function buildFallbackMesh() {
  const geo = new THREE.IcosahedronGeometry(1.15, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xe05c26,
    metalness: 0.35,
    roughness: 0.45,
    emissive: 0x232b5c,
    emissiveIntensity: 0.15,
    wireframe: true
  });
  return new THREE.Mesh(geo, mat);
}

onMounted(() => {
  const el = root.value;
  if (!el) return;

  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    useStatic.value = true;
    return;
  }

  const w = Math.max(1, el.clientWidth || 220);
  const h = Math.max(1, el.clientHeight || 56);
  const c = CFG;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(c.fov, w / h, 0.1, 100);
  camera.position.z = c.camZ;

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  el.appendChild(renderer.domElement);

  const amb = new THREE.AmbientLight(0xffffff, 0.55);
  scene.add(amb);
  const point = new THREE.PointLight(0xe05c26, 1.45, 100, 1);
  point.position.set(3, 3, 3);
  scene.add(point);

  logoGroup = new THREE.Group();
  scene.add(logoGroup);

  let mouseX = 0;
  let mouseY = 0;
  mouseMoveHandler = (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };
  window.addEventListener('mousemove', mouseMoveHandler, { passive: true });

  const clock = new THREE.Clock();
  const loader = new THREE.TextureLoader();
  loader.load(
    '/assets/images/logo/logo.png',
    (logoTexture) => {
      texture = logoTexture;
      if (logoTexture.colorSpace !== undefined) {
        logoTexture.colorSpace = THREE.SRGBColorSpace;
      }
      const logoGeometry = new THREE.PlaneGeometry(c.planeW, c.planeH);
      const logoMaterial = new THREE.MeshBasicMaterial({
        map: logoTexture,
        transparent: true,
        opacity: 0.92,
        side: THREE.DoubleSide
      });
      const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
      logoGroup.add(logoMesh);

      const particlesGeometry = new THREE.BufferGeometry();
      const count = c.particles;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particlesMaterial = new THREE.PointsMaterial({
        color: 0xe05c26,
        size: c.particleSize,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        sizeAttenuation: true
      });
      particles = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particles);

      const tick = () => {
        frame = requestAnimationFrame(tick);
        const t = Date.now() * 0.001;
        if (logoGroup) {
          logoGroup.position.y = Math.sin(t * 0.75) * 0.06;
          logoGroup.rotation.y = THREE.MathUtils.lerp(logoGroup.rotation.y, mouseX * 0.35, 0.09);
          logoGroup.rotation.x = THREE.MathUtils.lerp(logoGroup.rotation.x, -mouseY * 0.16, 0.09);
        }
        if (particles) {
          particles.rotation.y = t * 0.09;
          particles.rotation.x = t * 0.045;
        }
        renderer.render(scene, camera);
      };
      tick();
    },
    undefined,
    () => {
      const mesh = buildFallbackMesh();
      logoGroup.add(mesh);
      const tick = () => {
        frame = requestAnimationFrame(tick);
        const t = clock.getElapsedTime();
        mesh.rotation.x = t * 0.28;
        mesh.rotation.y = t * 0.38;
        renderer.render(scene, camera);
      };
      tick();
    }
  );

  ro = new ResizeObserver(() => {
    if (!root.value || !renderer || !camera) return;
    const ew = Math.max(1, root.value.clientWidth);
    const eh = Math.max(1, root.value.clientHeight);
    camera.aspect = ew / eh;
    camera.updateProjectionMatrix();
    renderer.setSize(ew, eh);
  });
  ro.observe(el);
});

onUnmounted(() => {
  dispose();
});
</script>

<template>
  <div ref="root" class="logo-3d-canvas" :class="{ 'logo-3d--static': useStatic }">
    <img
      v-if="useStatic"
      class="logo-3d-fallback-img"
      src="/assets/images/logo/logo.png"
      width="200"
      height="56"
      alt=""
      draggable="false"
    />
  </div>
</template>
