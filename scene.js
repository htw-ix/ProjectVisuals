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

  // 2. Silky Smooth Comparison Slider with Inertia & Lerp
  const comparison = document.getElementById('comparison');
  const range = document.getElementById('comparison-range');
  if (comparison && range) {
    let currentSplit = parseFloat(range.value) || 50;
    let targetSplit = currentSplit;
    let isRunning = false;

    const lerpSplit = () => {
      const delta = targetSplit - currentSplit;
      if (Math.abs(delta) > 0.05) {
        currentSplit += delta * 0.22; // silky smooth spring lerp
        comparison.style.setProperty('--split', currentSplit.toFixed(2) + '%');
        requestAnimationFrame(lerpSplit);
      } else {
        currentSplit = targetSplit;
        comparison.style.setProperty('--split', currentSplit + '%');
        isRunning = false;
      }
    };

    const setTarget = (val) => {
      targetSplit = Math.max(0, Math.min(100, parseFloat(val)));
      if (!isRunning) {
        isRunning = true;
        requestAnimationFrame(lerpSplit);
      }
    };

    range.addEventListener('input', (e) => setTarget(e.target.value));
    range.addEventListener('change', (e) => setTarget(e.target.value));

    // Direct pointer drag on the comparison stage for effortless interaction
    comparison.addEventListener('pointermove', (e) => {
      if (e.buttons === 1) {
        const rect = comparison.getBoundingClientRect();
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        const clamped = Math.max(0, Math.min(100, percent));
        range.value = Math.round(clamped);
        setTarget(clamped);
      }
    });

    comparison.style.setProperty('--split', currentSplit + '%');
  }
})();
