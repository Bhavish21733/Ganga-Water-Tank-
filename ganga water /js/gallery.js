/**
 * ============================================================
 * GANGA — GALLERY.JS (Gallery filter + Lightbox)
 * ============================================================
 */

(function () {
  'use strict';

  /* ── GALLERY FILTER ───────────────────────────────────────── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.dataset.filter;

      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter items
      galleryItems.forEach(item => {
        const itemCat = item.dataset.category;
        const show = category === 'all' || itemCat === category;

        if (show) {
          item.style.display = '';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.96)';
          setTimeout(() => { item.style.display = 'none'; }, 280);
        }
      });
    });
  });

  // Set transition on items
  galleryItems.forEach(item => {
    item.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
  });

  /* ── LIGHTBOX ─────────────────────────────────────────────── */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightbox-img');
  const lightboxCap   = document.getElementById('lightbox-cap');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev  = document.getElementById('lightbox-prev');
  const lightboxNext  = document.getElementById('lightbox-next');

  if (!lightbox) return;

  let currentLightboxIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(el => el.style.display !== 'none');
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentLightboxIndex = Math.max(0, Math.min(index, visibleItems.length - 1));
    updateLightboxImage();
    lightbox.hidden = false;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose?.focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    const item = visibleItems[currentLightboxIndex];
    if (!item) return;
    const img  = item.querySelector('img');
    const src  = item.dataset.src || img?.src;
    const alt  = img?.alt || 'Gallery image';
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = alt;
    }
    if (lightboxCap) {
      lightboxCap.textContent = `${currentLightboxIndex + 1} / ${visibleItems.length}`;
    }
  }

  function showPrev() {
    currentLightboxIndex = currentLightboxIndex <= 0
      ? visibleItems.length - 1
      : currentLightboxIndex - 1;
    updateLightboxImage();
  }

  function showNext() {
    currentLightboxIndex = currentLightboxIndex >= visibleItems.length - 1
      ? 0
      : currentLightboxIndex + 1;
    updateLightboxImage();
  }

  // Open on click
  galleryItems.forEach((item, i) => {
    item.addEventListener('click', () => {
      visibleItems = getVisibleItems();
      const visIdx = visibleItems.indexOf(item);
      openLightbox(visIdx >= 0 ? visIdx : 0);
    });

    // Keyboard open
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', item.querySelector('img')?.alt || 'View image');
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        visibleItems = getVisibleItems();
        const visIdx = visibleItems.indexOf(item);
        openLightbox(visIdx >= 0 ? visIdx : 0);
      }
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', showPrev);
  lightboxNext?.addEventListener('click', showNext);

  // Close on backdrop click
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', e => {
    if (lightbox.hidden) return;
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  // Touch/swipe in lightbox
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? showNext() : showPrev();
  });

})();
