/**
 * ============================================================
 * GANGA — MAIN.JS (Shared site-wide behaviour)
 * ============================================================
 * Handles: Header scroll, Mobile menu, Scroll reveals,
 *          Smooth anchor scroll, Active nav highlighting
 * ============================================================
 */

(function () {
  'use strict';

  /* ── HEADER SCROLL BEHAVIOUR ──────────────────────────────── */
  const header = document.querySelector('.site-header');
  if (header) {
    const heroPages = document.body.classList.contains('hero-page');

    function updateHeader() {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
        header.classList.remove('transparent');
      } else {
        header.classList.remove('scrolled');
        if (heroPages) header.classList.add('transparent');
      }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ── MOBILE MENU ──────────────────────────────────────────── */
  const menuBtn      = document.getElementById('menu-btn');
  const menuClose    = document.getElementById('menu-close');
  const mobileMenu   = document.getElementById('mobile-menu');
  const menuBackdrop = document.getElementById('menu-backdrop');

  function openMenu() {
    mobileMenu?.classList.add('open');
    mobileMenu?.classList.remove('closing');
    menuBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn?.setAttribute('aria-expanded', 'true');
    menuClose?.focus();
  }

  function closeMenu() {
    mobileMenu?.classList.add('closing');
    menuBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn?.setAttribute('aria-expanded', 'false');

    setTimeout(() => {
      mobileMenu?.classList.remove('open', 'closing');
    }, 230);
  }

  menuBtn?.addEventListener('click', openMenu);
  menuClose?.addEventListener('click', closeMenu);
  menuBackdrop?.addEventListener('click', closeMenu);

  // Close on nav link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
      closeMenu();
    }
  });

  /* ── ACTIVE NAV LINK ──────────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── SCROLL REVEAL ────────────────────────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length && typeof IntersectionObserver !== 'undefined') {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay || 0;
            setTimeout(() => el.classList.add('visible'), Number(delay));
            revealObserver.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show immediately
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── PROCESS STEP STAGGER ─────────────────────────────────── */
  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length && typeof IntersectionObserver !== 'undefined') {
    const processObs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            processSteps.forEach((step, i) => {
              setTimeout(() => step.classList.add('visible'), i * 150);
            });
            processObs.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (processSteps[0]) processObs.observe(processSteps[0].closest('.process-grid') || processSteps[0]);
  }

  /* ── SMOOTH ANCHOR SCROLL ─────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── COUNT-UP ANIMATION ───────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && typeof IntersectionObserver !== 'undefined') {
    const countObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const end = parseInt(el.dataset.count, 10);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.round(eased * end);
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = end;
        }

        requestAnimationFrame(update);
        countObs.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => countObs.observe(el));
  }

  /* ── PAGE LOAD CLASS ──────────────────────────────────────── */
  document.documentElement.classList.add('js-loaded');
  document.body.classList.add('page-enter');

})();
