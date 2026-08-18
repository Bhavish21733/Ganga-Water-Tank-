/**
 * Ganga Water Tank Cleaning Services
 * Premium Motion & Interaction System — motion.js
 * CANDIDATE_01
 *
 * Architecture:
 *  1. Page Entrance (body.page-loaded)
 *  2. Scroll Reveal (IntersectionObserver)
 *  3. Header Scroll + Hide/Reveal
 *  4. Hero Parallax (desktop only)
 *  5. Mobile Sticky CTA Entrance
 *  6. Process Timeline Stagger
 *  7. Review Carousel Autoplay
 *  8. Scroll Progress Bar
 *  9. Page Transitions
 * 10. Water Wave Setup
 */

(function () {
  'use strict';

  /* =============================================
     UTILITY: Check reduced motion preference
     ============================================= */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.innerWidth >= 1025;
  const isTablet  = () => window.innerWidth >= 769 && window.innerWidth < 1025;
  const isMobile  = () => window.innerWidth < 769;

  /* =============================================
     1. PAGE ENTRANCE
     Add .page-loaded to <body> after a brief tick
     so CSS transitions fire on first paint.
     ============================================= */
  function initPageEntrance() {
    // Add scroll progress bar to DOM
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    progressBar.setAttribute('aria-hidden', 'true');
    document.body.prepend(progressBar);

    // Trigger entrance after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.body.classList.add('page-loaded');
      });
    });
  }

  /* =============================================
     2. SCROLL REVEAL — IntersectionObserver
     ============================================= */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      // Make everything visible immediately
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-child, .fade-in, .process-step, .section-header').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe all reveal elements
    document.querySelectorAll(
      '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-child, .fade-in, .process-step'
    ).forEach(el => revealObserver.observe(el));

    // Section headers — trigger accent line
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          headerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.section-header').forEach(el => headerObserver.observe(el));

    // Stagger containers — when parent is visible, children stagger
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.stagger-container').forEach(container => {
      staggerObserver.observe(container);
    });
  }

  /* =============================================
     3. HEADER — SCROLL + MOBILE HIDE/REVEAL
     ============================================= */
  function initHeaderBehaviour() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;
    const SCROLL_THRESHOLD = 80; // px before header hides on mobile

    const onScroll = () => {
      const currentY = window.scrollY;

      // Scrolled class (shadow + compact)
      if (currentY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Mobile hide/reveal
      if (isMobile()) {
        const diff = currentY - lastScrollY;
        if (diff > 6 && currentY > SCROLL_THRESHOLD) {
          header.classList.add('header-hidden');
        } else if (diff < -4) {
          header.classList.remove('header-hidden');
        }
      }

      lastScrollY = currentY;
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial call
    onScroll();
  }

  /* =============================================
     4. HERO PARALLAX — Desktop only, minimal
     ============================================= */
  function initHeroParallax() {
    if (prefersReducedMotion || isMobile()) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Only run on desktop + tablet
    let ticking = false;

    const onScroll = () => {
      if (!isDesktop() && !isTablet()) return;

      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      if (scrollY < heroHeight + 200) {
        // Move background at 15% of scroll speed — very subtle
        const offset = scrollY * 0.15;
        hero.style.backgroundPositionY = `calc(center + ${offset}px)`;
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }


  /* =============================================
     6. PROCESS TIMELINE — Sequential Stagger
     ============================================= */
  function initProcessTimeline() {
    if (prefersReducedMotion) return;

    const processSection = document.querySelector('.process-steps, .process-grid, [class*="process"]');
    if (!processSection) return;

    const steps = processSection.querySelectorAll('.process-step, .process-item, .step-item');
    if (!steps.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          steps.forEach((step, i) => {
            setTimeout(() => {
              step.classList.add('is-visible');
            }, i * 120);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observer.observe(processSection);
  }

  /* =============================================
     7. REVIEWS CAROUSEL — Autoplay + Pause
     ============================================= */
  function initReviewsAutoplay() {
    if (prefersReducedMotion) return;

    const carousel = document.getElementById('reviewsCarousel');
    if (!carousel) return;

    let autoplayTimer = null;
    let isPaused = false;

    const cards = carousel.querySelectorAll('.review-card');
    if (cards.length <= 1) return;

    const getCardWidth = () => {
      const card = cards[0];
      const gap = 24;
      return card ? card.offsetWidth + gap : 0;
    };

    const advance = () => {
      if (isPaused) return;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      if (carousel.scrollLeft >= maxScroll - 2) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
      }
    };

    const start = () => {
      if (autoplayTimer) return;
      autoplayTimer = setInterval(advance, 4500);
    };

    const pause = () => {
      isPaused = true;
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    };

    const resume = () => {
      isPaused = false;
      start();
    };

    // Pause on hover
    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);

    // Pause on touch / user scroll
    carousel.addEventListener('touchstart', pause, { passive: true });
    carousel.addEventListener('touchend', () => setTimeout(resume, 2000));

    // Pause when not visible
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        resume();
      } else {
        pause();
      }
    }, { threshold: 0.3 });

    visibilityObserver.observe(carousel);

    // Start
    start();
  }

  /* =============================================
     8. SCROLL PROGRESS BAR
     ============================================= */
  function initScrollProgress() {
    const bar = document.querySelector('.scroll-progress-bar');
    if (!bar) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
          bar.style.width = progress + '%';
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* =============================================
     9. PAGE TRANSITIONS
     Short fade when navigating away.
     ============================================= */
  function initPageTransitions() {
    if (prefersReducedMotion) return;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.prepend(overlay);

    // Intercept internal link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      // Skip external links, anchors, tel, mailto, WhatsApp
      if (href.startsWith('http') || href.startsWith('#') ||
          href.startsWith('tel:') || href.startsWith('mailto:') ||
          href.startsWith('https://wa.me') || link.target === '_blank') {
        return;
      }

      e.preventDefault();

      overlay.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = href;
      }, 280);
    });
  }

  /* =============================================
     10. ADD SECTION REVEAL CLASSES TO HTML
     Automatically adds .reveal classes to key
     sections so we don't need to edit every HTML.
     ============================================= */
  function autoTagSections() {
    if (prefersReducedMotion) return;

    // Trust strip — reveal
    const trustStrip = document.querySelector('.trust-strip');
    if (trustStrip) trustStrip.classList.add('fade-in');

    // Section headers — auto-reveal
    document.querySelectorAll('.section-header:not(.reveal)').forEach(el => {
      el.classList.add('reveal');
    });

    // Service grid — stagger children
    const serviceGrid = document.querySelector('.services-grid, .service-grid, .grid-3');
    if (serviceGrid) {
      serviceGrid.classList.add('stagger-container');
      serviceGrid.querySelectorAll('.service-card').forEach(card => {
        card.classList.add('stagger-child');
      });
    }

    // Why Choose Us — left/right reveal
    const whySection = document.querySelector('.split-layout');
    if (whySection) {
      const [left, right] = whySection.children;
      if (left) left.classList.add('reveal-left');
      if (right) right.classList.add('reveal-right');
    }

    // Blog cards — stagger
    const blogGrid = document.querySelector('.blog-grid, .blog-cards');
    if (blogGrid) {
      blogGrid.classList.add('stagger-container');
      blogGrid.querySelectorAll('.blog-card').forEach(card => card.classList.add('stagger-child'));
    }

    // Gallery items — stagger
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
      galleryGrid.classList.add('stagger-container');
      galleryGrid.querySelectorAll('.gallery-item').forEach(item => item.classList.add('stagger-child'));
    }

    // Review section heading
    const reviewSection = document.querySelector('.reviews-section, section:has(#reviewsCarousel)');
    if (reviewSection) {
      const header = reviewSection.querySelector('.section-header');
      if (header) header.classList.add('reveal');
    }

    // CTA sections — reveal
    document.querySelectorAll('.urgent-cta-section, .urgent-cta-strip, .footer-cta-strip').forEach(el => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
    });

    // Footer — fade in
    const footer = document.querySelector('.footer');
    if (footer) footer.classList.add('fade-in');

    // Process steps
    document.querySelectorAll('.step-card, .process-step').forEach(el => {
      el.classList.add('process-step');
    });

    // Why-choose-us benefit items
    document.querySelectorAll('.benefit-item, .feature-item').forEach((el, i) => {
      el.classList.add('stagger-child');
    });
  }

  /* =============================================
     SWIPE SUPPORT — Reviews and Gallery on touch
     ============================================= */
  function initSwipeSupport() {
    const swipeEls = document.querySelectorAll('#reviewsCarousel, .gallery-grid');
    swipeEls.forEach(el => {
      let startX = 0;
      let isDragging = false;

      el.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
      }, { passive: true });

      el.addEventListener('touchend', e => {
        if (!isDragging) return;
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          // Swipe handled by native scroll-snap
        }
        isDragging = false;
      }, { passive: true });
    });
  }

  /* =============================================
     WATER WAVE — Add SVG wave to CTA section
     ============================================= */
  function initWaterWaves() {
    if (isMobile()) return; // hidden via CSS anyway

    const ctaSection = document.querySelector('.urgent-cta-section');
    if (ctaSection) {
      ctaSection.style.position = 'relative';
      ctaSection.style.overflow = 'hidden';
      const wave = document.createElement('div');
      wave.className = 'water-wave-accent';
      wave.setAttribute('aria-hidden', 'true');
      wave.innerHTML = '<svg viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none"><path d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z" opacity="1"/></svg>';
      ctaSection.appendChild(wave);
    }
  }

  /* =============================================
     INIT
     ============================================= */
  function init() {
    initPageEntrance();
    autoTagSections();
    initScrollReveal();
    initHeaderBehaviour();
    initHeroParallax();
    initProcessTimeline();
    initReviewsAutoplay();
    initScrollProgress();
    initPageTransitions();
    initSwipeSupport();
    initWaterWaves();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
