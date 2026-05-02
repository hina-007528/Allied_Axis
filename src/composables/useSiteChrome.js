let fadeObs;

export function initFadeIns() {
  const els = document.querySelectorAll('.fade-in:not(.visible)');
  if (!els.length) return;
  fadeObs?.disconnect();
  fadeObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          fadeObs?.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => fadeObs.observe(el));
}

export function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('header-scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

export function hidePageLoader() {
  document.getElementById('page-loader')?.classList.add('done');
}
