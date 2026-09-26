/* Project Visuals: 3D Interface Roulette & Interactive Comparison */
(() => {
  'use strict';

  // 1. 3D Roulette Gallery
  const wrapper = document.getElementById('roulette-wrapper');
  const stage = document.getElementById('roulette-stage');
  const cards = Array.from(document.querySelectorAll('.roulette-card'));
  const dots = Array.from(document.querySelectorAll('.roulette-dot'));
  const captions = Array.from(document.querySelectorAll('.caption-slide'));
  const prevBtn = document.getElementById('roulette-prev');
  const nextBtn = document.getElementById('roulette-next');

  if (cards.length > 0) {
    let activeIndex = 0;
    const total = cards.length;
    let autoplayTimer = null;
    let isHovered = false;

    function setRoulette(index) {
      activeIndex = (index % total + total) % total;
      
      cards.forEach((card, idx) => {
        const diff = (idx - activeIndex + total) % total;
        card.classList.remove('is-active', 'is-left', 'is-right');
        
        if (diff === 0) {
          card.classList.add('is-active');
          card.setAttribute('aria-selected', 'true');
        } else if (diff === 1) {
          card.classList.add('is-right');
          card.setAttribute('aria-selected', 'false');
        } else {
          card.classList.add('is-left');
          card.setAttribute('aria-selected', 'false');
        }
      });

      dots.forEach((dot, idx) => {
        const isActive = idx === activeIndex;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-selected', String(isActive));
      });

      captions.forEach((cap, idx) => {
        cap.classList.toggle('is-active', idx === activeIndex);
      });
    }

    function next() { setRoulette(activeIndex + 1); }
    function prev() { setRoulette(activeIndex - 1); }

    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.dataset.goto, 10);
        if (!isNaN(target)) setRoulette(target);
      });
    });

    cards.forEach(card => {
      card.addEventListener('click', () => {
        const target = parseInt(card.dataset.index, 10);
        if (!isNaN(target) && target !== activeIndex) {
          setRoulette(target);
        }
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const target = parseInt(card.dataset.index, 10);
          if (!isNaN(target)) setRoulette(target);
        }
      });
    });

    // Touch and pointer swipe
    if (stage) {
      let startX = 0;
      let startY = 0;
      let isPointerDown = false;

      stage.addEventListener('pointerdown', (e) => {
        if (e.button !== 0) return;
        isPointerDown = true;
        startX = e.clientX;
        startY = e.clientY;
      });

      stage.addEventListener('pointerup', (e) => {
        if (!isPointerDown) return;
        isPointerDown = false;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          if (dx < 0) next();
          else prev();
        }
      });

      stage.addEventListener('pointercancel', () => { isPointerDown = false; });
    }

    // Keyboard navigation when wrapper or child is focused
    if (wrapper) {
      wrapper.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prev();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          next();
        }
      });

      wrapper.addEventListener('mouseenter', () => { isHovered = true; });
      wrapper.addEventListener('mouseleave', () => { isHovered = false; });
    }

    // Gentle Auto-advance every 6.5 seconds when not hovered
    function startAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (!isHovered && !document.hidden) {
          next();
        }
      }, 6500);
    }
    startAutoplay();

    // Initial positioning
    setRoulette(0);
  }

  // 2. Ironclad Comparison Slider (Instant 1:1, Zero Lag, Zero Jitter)
  const comparison = document.getElementById('comparison');
  const range = document.getElementById('comparison-range');
  if (comparison && range) {
    let ticking = false;
    const updateSplit = () => {
      comparison.style.setProperty('--split', range.value + '%');
      ticking = false;
    };
    range.addEventListener('input', () => {
      if (!ticking) {
        requestAnimationFrame(updateSplit);
        ticking = true;
      }
    });
    range.addEventListener('change', () => {
      comparison.style.setProperty('--split', range.value + '%');
    });
    // Initial sync
    comparison.style.setProperty('--split', (range.value || 50) + '%');
  }
})();
