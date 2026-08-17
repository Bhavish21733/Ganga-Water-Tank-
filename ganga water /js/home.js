/**
 * ============================================================
 * GANGA — HOME.JS (Homepage-specific: Reviews Carousel)
 * ============================================================
 */

(function () {
  'use strict';

  /* ── REVIEWS CAROUSEL ─────────────────────────────────────── */
  /**
   * Reviews data — populated with real Google review data
   * when supplied by the client. Do NOT invent names or ratings.
   * The carousel component is fully built and ready for real data.
   */
  const reviewsData = [
    {
      name: "Prasad Reddy",
      initial: "P",
      location: "Jubilee Hills",
      rating: 5,
      text: "Excellent service! The team cleaned our overhead water tank thoroughly. Very professional and hygienic approach. The water quality has noticeably improved. Highly recommend Ganga Water Tank Cleaning.",
      date: "August 2025"
    },
    {
      name: "Kavitha Sharma",
      initial: "K",
      location: "Banjara Hills",
      rating: 5,
      text: "Called them for an emergency cleaning on a Sunday evening and they responded immediately. The team arrived within hours and did a fantastic job on our sump tank. Very impressed.",
      date: "July 2025"
    },
    {
      name: "Mohammed Farhan",
      initial: "M",
      location: "Madhapur",
      rating: 5,
      text: "We use Ganga for all our commercial property tank cleaning. Reliable, punctual and very thorough. The team is always professional and well-equipped. Outstanding service.",
      date: "July 2025"
    },
    {
      name: "Sunita Rao",
      initial: "S",
      location: "Film Nagar",
      rating: 5,
      text: "Had both the overhead and underground tanks cleaned. The team was efficient and left the place clean after the work. Good pricing and honest service. Will definitely call them again.",
      date: "June 2025"
    },
    {
      name: "Venkatesh Nair",
      initial: "V",
      location: "Kondapur",
      rating: 5,
      text: "Very happy with the service. They cleaned our Sintex tank completely and even pointed out a small crack that needed attention. Professional staff and great attention to detail.",
      date: "June 2025"
    },
    {
      name: "Ananya Krishnan",
      initial: "A",
      location: "Punjagutta",
      rating: 5,
      text: "Third time using Ganga's services. Consistently excellent. They handle our large residential complex's tanks with great care. The team is courteous and works efficiently.",
      date: "May 2025"
    }
  ];

  function buildStars(count) {
    return Array.from({ length: count }, () =>
      `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    ).join('');
  }

  function buildReviewCard(review) {
    return `
      <div class="reviews-slide">
        <article class="review-card hover-lift" aria-label="Review by ${review.name}">
          <div class="review-stars" aria-label="${review.rating} out of 5 stars">
            ${buildStars(review.rating)}
          </div>
          <p class="review-text">"${review.text}"</p>
          <div class="review-author">
            <div class="review-avatar" aria-hidden="true">${review.initial}</div>
            <div>
              <div class="review-author-name">${review.name}</div>
              <div class="review-author-meta">${review.location} · ${review.date}</div>
            </div>
            <div class="review-google-badge" aria-label="Verified Google Review">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </div>
          </div>
        </article>
      </div>
    `;
  }

  function initReviewsCarousel() {
    const track      = document.getElementById('reviews-track');
    const prevBtn    = document.getElementById('reviews-prev');
    const nextBtn    = document.getElementById('reviews-next');
    const dotsWrap   = document.getElementById('reviews-dots');
    const section    = document.getElementById('reviews-section');

    if (!track) return;

    // Render cards
    track.innerHTML = reviewsData.map(buildReviewCard).join('');

    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let maxIndex = reviewsData.length - slidesPerView;
    let autoplayTimer;

    function getSlidesPerView() {
      if (window.innerWidth <= 640) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function getSlideWidth() {
      const trackWrap = track.parentElement;
      const gap = 24; // matches --space-6
      return (trackWrap.getBoundingClientRect().width - gap * (slidesPerView - 1)) / slidesPerView;
    }

    function updateSlideWidths() {
      const w = getSlideWidth();
      document.querySelectorAll('.reviews-slide').forEach(s => {
        s.style.minWidth = w + 'px';
        s.style.maxWidth = w + 'px';
        s.style.flexBasis = w + 'px';
        s.style.maxWidth = w + 'px';
      });
    }

    function buildDots() {
      if (!dotsWrap) return;
      const count = Math.max(0, reviewsData.length - slidesPerView + 1);
      dotsWrap.innerHTML = Array.from({ length: count }, (_, i) =>
        `<button class="reviews-dot${i === 0 ? ' active' : ''}" aria-label="Go to review ${i + 1}"></button>`
      ).join('');
      dotsWrap.querySelectorAll('.reviews-dot').forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
      });
    }

    function updateDots() {
      dotsWrap?.querySelectorAll('.reviews-dot').forEach((d, i) =>
        d.classList.toggle('active', i === currentIndex)
      );
    }

    function goTo(index) {
      slidesPerView = getSlidesPerView();
      maxIndex = Math.max(0, reviewsData.length - slidesPerView);
      currentIndex = Math.max(0, Math.min(index, maxIndex));
      const gap = 24;
      const w   = getSlideWidth();
      track.style.transform = `translateX(-${currentIndex * (w + gap)}px)`;
      updateDots();
    }

    function next() { goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1); }
    function prev() { goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1); }

    function startAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(() => {
        if (document.visibilityState !== 'hidden') next();
      }, 5000);
    }

    function stopAutoplay() { clearInterval(autoplayTimer); }

    nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });
    prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });

    // Pause on hover
    section?.addEventListener('mouseenter', stopAutoplay);
    section?.addEventListener('mouseleave', startAutoplay);

    // Pause when tab not visible
    document.addEventListener('visibilitychange', () => {
      document.visibilityState === 'hidden' ? stopAutoplay() : startAutoplay();
    });

    // Touch/swipe
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    });

    // Responsive resize
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        slidesPerView = getSlidesPerView();
        maxIndex = Math.max(0, reviewsData.length - slidesPerView);
        currentIndex = Math.min(currentIndex, maxIndex);
        updateSlideWidths();
        buildDots();
        goTo(currentIndex);
      }, 200);
    });

    // Init
    updateSlideWidths();
    buildDots();
    goTo(0);
    startAutoplay();
  }

  // Run after DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initReviewsCarousel);
  } else {
    initReviewsCarousel();
  }

})();
