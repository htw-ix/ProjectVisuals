// Preloader Logic for Website Loading
(() => {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloader-bar');
  const status = document.getElementById('preloader-status');

  if (preloader) {
    let progress = 0;
    const updateProgress = (val, text) => {
      progress = Math.min(100, Math.max(progress, val));
      if (bar) bar.style.width = progress + '%';
      if (status && text) status.textContent = text;
    };

    // Realistic web asset loading phases
    updateProgress(25, 'Инициализация интерфейса...');
    setTimeout(() => updateProgress(55, 'Загрузка шрифтов и графики...'), 240);
    setTimeout(() => updateProgress(85, 'Подготовка интерактивных компонентов...'), 520);

    const finishPreloader = () => {
      updateProgress(100, 'Добро пожаловать в Project Visuals');
      setTimeout(() => {
        preloader.classList.add('is-hidden');
        document.body.classList.add('js-ready');
      }, 350);
    };

    if (document.readyState === 'complete') {
      setTimeout(finishPreloader, 750);
    } else {
      window.addEventListener('load', () => {
        setTimeout(finishPreloader, 400);
      });
      // Safety fallback: never block longer than 2.2s
      setTimeout(finishPreloader, 2200);
    }
  } else {
    document.body.classList.add('js-ready');
  }
})();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const stage = document.querySelector('.logo-stage');
if (!reducedMotion.matches && window.matchMedia('(pointer:fine)').matches && stage) {
  stage.addEventListener('pointermove', event => {
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty('--ry', `${((event.clientX - rect.left) / rect.width - 0.5) * 15}deg`);
    stage.style.setProperty('--rx', `${-((event.clientY - rect.top) / rect.height - 0.5) * 12}deg`);
  });
  stage.addEventListener('pointerleave', () => {
    stage.style.setProperty('--rx', '0deg');
    stage.style.setProperty('--ry', '0deg');
  });
}

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.hash === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-20% 0px -50% 0px' });

document.querySelectorAll('main section[id]').forEach(section => navObserver.observe(section));

// Smooth Anchor Navigation on clicks (leaves native scrollbar free from jitter)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Ambient particles behind content
const atmosphere = document.querySelector('.ambient-particles');
if (atmosphere) {
  for (let i = 0; i < 32; i++) {
    const dot = document.createElement('i');
    dot.className = 'ambient-particle';
    dot.style.setProperty('--x', `${(i * 61.8034) % 100}%`);
    dot.style.setProperty('--size', `${i % 5 === 0 ? 3 : 1.5}px`);
    dot.style.setProperty('--travel', `${(i % 2 ? 1 : -1) * (45 + (i * 13) % 110)}px`);
    dot.style.setProperty('--duration', `${29 + (i * 7) % 31}s`);
    dot.style.setProperty('--delay', `${-i * 5.73}s`);
    atmosphere.append(dot);
  }
}

const bannerObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  entry.target.classList.toggle('light-active', entry.isIntersecting);
}), { rootMargin: '80px' });

document.querySelectorAll('.price-card, .hwid-banner').forEach(card => {
  const light = document.createElement('span');
  light.className = 'banner-light';
  light.setAttribute('aria-hidden', 'true');
  card.prepend(light);
  bannerObserver.observe(card);
});

const pauseAtmosphere = () => document.body.classList.toggle('atmosphere-paused', document.hidden);
document.addEventListener('visibilitychange', pauseAtmosphere);
pauseAtmosphere();

// ========================================================
// Plan Dialog Logic
// ========================================================
const planDialog = document.getElementById('plan-dialog');
const closeDialog = () => {
  if (!planDialog || !planDialog.open || planDialog.classList.contains('is-closing')) return;
  planDialog.classList.add('is-closing');
  setTimeout(() => {
    planDialog.close();
    planDialog.classList.remove('is-closing');
  }, 240);
};

document.querySelectorAll('[data-plan]').forEach(button => {
  button.addEventListener('click', () => {
    const titleEl = document.getElementById('plan-dialog-title');
    const costEl = document.getElementById('plan-dialog-cost');
    if (titleEl) titleEl.textContent = button.dataset.plan;
    if (costEl) costEl.textContent = button.dataset.cost + ' ₽';
    planDialog.classList.remove('is-closing');
    planDialog.showModal();
  });
});

document.querySelector('.dialog-close')?.addEventListener('click', closeDialog);
document.querySelector('.dialog-confirm')?.addEventListener('click', closeDialog);

planDialog?.addEventListener('click', event => {
  if (event.target === planDialog) {
    const r = planDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
      closeDialog();
    }
  }
});
planDialog?.addEventListener('cancel', e => {
  e.preventDefault();
  closeDialog();
});

// ========================================================
// BACKEND-READY AUTHENTICATION MODULE (Вход & Регистрация)
// Разработчик бэкенда может подключить свои fetch() в функциях:
// - executeLogin(username, password, remember)
// - executeRegister(username, email, password)
// ========================================================
const authDialog = document.getElementById('auth-dialog');
const openAuthBtn = document.getElementById('open-auth-btn');
const authCloseBtn = document.querySelector('.auth-close-btn');
const tabBtnLogin = document.getElementById('tab-btn-login');
const tabBtnRegister = document.getElementById('tab-btn-register');
const formLogin = document.getElementById('auth-form-login');
const formRegister = document.getElementById('auth-form-register');
const authAlert = document.getElementById('auth-alert');
const navAuthLabel = document.getElementById('nav-auth-label');

const showAuthAlert = (text, isSuccess = false) => {
  if (!authAlert) return;
  authAlert.textContent = text;
  authAlert.hidden = false;
  authAlert.classList.toggle('is-success', isSuccess);
};

const hideAuthAlert = () => {
  if (!authAlert) return;
  authAlert.hidden = true;
  authAlert.textContent = '';
};

const openAuthModal = (defaultTab = 'login') => {
  if (!authDialog) return;
  hideAuthAlert();
  switchAuthTab(defaultTab);
  authDialog.classList.remove('is-closing');
  authDialog.showModal();
};

const closeAuthModal = () => {
  if (!authDialog || !authDialog.open || authDialog.classList.contains('is-closing')) return;
  authDialog.classList.add('is-closing');
  setTimeout(() => {
    authDialog.close();
    authDialog.classList.remove('is-closing');
  }, 240);
};

const switchAuthTab = (tab) => {
  hideAuthAlert();
  if (tab === 'login') {
    tabBtnLogin?.classList.add('is-active');
    tabBtnRegister?.classList.remove('is-active');
    formLogin?.removeAttribute('hidden');
    formRegister?.setAttribute('hidden', '');
  } else {
    tabBtnRegister?.classList.add('is-active');
    tabBtnLogin?.classList.remove('is-active');
    formRegister?.removeAttribute('hidden');
    formLogin?.setAttribute('hidden', '');
  }
};

openAuthBtn?.addEventListener('click', () => openAuthModal('login'));
authCloseBtn?.addEventListener('click', closeAuthModal);
tabBtnLogin?.addEventListener('click', () => switchAuthTab('login'));
tabBtnRegister?.addEventListener('click', () => switchAuthTab('register'));

authDialog?.addEventListener('click', event => {
  if (event.target === authDialog) {
    const r = authDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
      closeAuthModal();
    }
  }
});
authDialog?.addEventListener('cancel', e => {
  e.preventDefault();
  closeAuthModal();
});

// Hook: Авторизация (Вход)
formLogin?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = formLogin.username.value.trim();
  const password = formLogin.password.value;
  const remember = formLogin.remember.checked;

  /* 
   * [ДЛЯ БЭКЕНД-РАЗРАБОТЧИКА]:
   * Замените этот блок на отправку запроса к вашему API:
   * 
   * try {
   *   const res = await fetch('/api/auth/login', {
   *     method: 'POST',
   *     headers: { 'Content-Type': 'application/json' },
   *     body: JSON.stringify({ username, password, remember })
   *   });
   *   const data = await res.json();
   *   if (res.ok) { ... }
   * } catch (err) { ... }
   */

  if (!username || !password) {
    showAuthAlert('Пожалуйста, заполните все поля');
    return;
  }

  showAuthAlert(`Вход выполнен успешно! Добро пожаловать, ${username}`, true);
  if (navAuthLabel) navAuthLabel.textContent = username;
  setTimeout(() => {
    closeAuthModal();
    formLogin.reset();
  }, 1200);
});

// Hook: Регистрация
formRegister?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = formRegister.username.value.trim();
  const email = formRegister.email.value.trim();
  const password = formRegister.password.value;
  const confirm = formRegister.password_confirm.value;

  if (password !== confirm) {
    showAuthAlert('Пароли не совпадают!');
    return;
  }
  if (password.length < 6) {
    showAuthAlert('Пароль должен быть не менее 6 символов');
    return;
  }

  /* 
   * [ДЛЯ БЭКЕНД-РАЗРАБОТЧИКА]:
   * Подключение API регистрации:
   * const res = await fetch('/api/auth/register', { ... });
   */

  showAuthAlert(`Аккаунт ${username} успешно создан! Входим...`, true);
  if (navAuthLabel) navAuthLabel.textContent = username;
  setTimeout(() => {
    closeAuthModal();
    formRegister.reset();
  }, 1300);
});

// ========================================================
// DAILY REWARDS DIALOG (Ежедневные награды)
// ========================================================
const dailyDialog = document.getElementById('daily-dialog');
const openDailyBtn = document.getElementById('open-daily-btn');
const closeDailyBtn = document.querySelector('.daily-close-btn');
const confirmDailyBtn = document.querySelector('.daily-confirm-btn');

const closeDailyModal = () => {
  if (!dailyDialog || !dailyDialog.open || dailyDialog.classList.contains('is-closing')) return;
  dailyDialog.classList.add('is-closing');
  setTimeout(() => {
    dailyDialog.close();
    dailyDialog.classList.remove('is-closing');
  }, 240);
};

openDailyBtn?.addEventListener('click', () => {
  dailyDialog?.classList.remove('is-closing');
  dailyDialog?.showModal();
});
closeDailyBtn?.addEventListener('click', closeDailyModal);
confirmDailyBtn?.addEventListener('click', closeDailyModal);

dailyDialog?.addEventListener('click', event => {
  if (event.target === dailyDialog) {
    const r = dailyDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) {
      closeDailyModal();
    }
  }
});

// Кнопка бесплатной версии
document.getElementById('free-notice-btn')?.addEventListener('click', () => {
  const titleEl = document.getElementById('plan-dialog-title');
  const costEl = document.getElementById('plan-dialog-cost');
  if (titleEl) titleEl.textContent = 'Project Visuals Free';
  if (costEl) costEl.textContent = 'Бесплатная версия';
  planDialog?.classList.remove('is-closing');
  planDialog?.showModal();
});

// ========================================================
// Fullscreen Lightbox Image Zoom
// ========================================================
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxCloseBtn = document.querySelector('.lightbox-close');
const lightboxBackdrop = document.querySelector('.lightbox-backdrop');

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Скриншот Project Visuals';
  if (lightboxCaption) {
    lightboxCaption.textContent = alt || 'Project Visuals';
  }
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightbox || !lightbox.classList.contains('is-open')) return;
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// Click to zoom on feature showcase cards
document.querySelectorAll('.feature-showcase').forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const img = card.querySelector('img');
      if (img) openLightbox(img.src, img.alt);
    }
  });
});

// Click to zoom on 3D roulette cards zoom button
document.querySelectorAll('.card-zoom-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const parent = btn.closest('.roulette-card');
    const img = parent?.querySelector('img');
    if (img) openLightbox(img.src, img.alt);
  });
});

// Click directly on active roulette card image
document.querySelectorAll('.roulette-card-glass img').forEach(img => {
  img.addEventListener('click', (e) => {
    const parentCard = img.closest('.roulette-card');
    if (parentCard && parentCard.classList.contains('is-active')) {
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    }
  });
});

lightboxCloseBtn?.addEventListener('click', closeLightbox);
lightboxBackdrop?.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-image-wrap')?.addEventListener('click', closeLightbox);

// Global Esc key handler
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (lightbox?.classList.contains('is-open')) {
      closeLightbox();
    }
    if (authDialog?.open) {
      closeAuthModal();
    }
    if (dailyDialog?.open) {
      closeDailyModal();
    }
  }
});
