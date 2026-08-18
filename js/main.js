/**
 * Ganga Water Tank Cleaning Services
 * Main Frontend Logic Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check if configuration is loaded
  if (typeof GangaConfig === 'undefined') {
    console.error('GangaConfig is not loaded. Make sure js/config.js is loaded first.');
    return;
  }

  // Bind dynamic URL updates (if any fallback targets are present in DOM)
  initCentralLinks();

  // Scroll Header Effect
  initHeaderScroll();

  // Mobile Menu Drawer
  initMobileMenu();

  // Contact Form Validation
  initContactForm();

  // Gallery Filters and Lightbox
  initGallery();

  // Google Reviews Carousel
  initReviewsCarousel();

  // Emergency Service Popup removed
  initEmergencyPopup();

  // Hero Quote Form submission handler
  const heroForm = document.getElementById('heroQuoteForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = heroForm.querySelectorAll('.form-control');
      const name = inputs[0].value.trim();
      const phone = inputs[1].value.trim();
      const email = inputs[2].value.trim();
      const serviceSelect = inputs[3];
      const service = serviceSelect.value ? serviceSelect.options[serviceSelect.selectedIndex].text : '';
      const message = inputs[4].value.trim();

      if (!name || !phone || !email || !service || !message) {
        alert('Please fill out all fields in the quote form.');
        return;
      }

      const waMessage = `Hello Ganga Services, I would like to get a quote:\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Email*: ${email}\n*Service*: ${service}\n*Details*: ${message}`;
      const waUrl = `https://wa.me/919381023251?text=${encodeURIComponent(waMessage)}`;

      window.open(waUrl, '_blank');
      heroForm.reset();
    });
  }
});

/**
 * Ensures all technical phone, maps, and WhatsApp links map directly to config variables
 */
function initCentralLinks() {
  // Update tel links
  document.querySelectorAll('a[href^="tel:"]').forEach(el => {
    el.setAttribute('href', GangaConfig.phoneLink);
  });

  // Update WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(el => {
    // Determine if it has a custom pre-filled message (e.g. data-service attribute)
    const serviceId = el.getAttribute('data-service');
    if (serviceId) {
      const service = GangaConfig.services.find(s => s.id === serviceId);
      if (service) {
        const encodedText = encodeURIComponent(service.whatsappMessage);
        el.setAttribute('href', `${GangaConfig.whatsappBaseUrl}?text=${encodedText}`);
        return;
      }
    }
    // Default WhatsApp
    el.setAttribute('href', GangaConfig.whatsappBaseUrl);
  });

  // Update Google Maps links
  document.querySelectorAll('a[href*="maps.app.goo.gl"]').forEach(el => {
    el.setAttribute('href', GangaConfig.googleMapsUrl);
  });
}

/**
 * Header styling on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Trigger once initially
  handleScroll();
}

/**
 * Mobile Navigation Drawer trigger
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.backdrop');
  const drawerLinks = document.querySelectorAll('.mobile-nav-links .nav-link');

  if (!hamburger || !drawer) return;

  const toggleMenu = () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const openMenu = () => {
    hamburger.classList.add('open');
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
  };

  const closeMenu = () => {
    hamburger.classList.remove('open');
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scrolling
  };

  hamburger.addEventListener('click', toggleMenu);
  if (backdrop) backdrop.addEventListener('click', closeMenu);

  // Close via the in-drawer X button
  const drawerCloseBtn = document.getElementById('drawerClose');
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMenu);

  // Close when links inside mobile menu are clicked
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Contact Form validation & user submission state
 */
function initContactForm() {
  const form = document.querySelector('#contactForm');
  const successBanner = document.querySelector('.form-success-banner');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasErrors = false;

    // Validate Name
    const nameInput = document.querySelector('#formName');
    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error');
      hasErrors = true;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Validate Phone Number (Basic digits validation)
    const phoneInput = document.querySelector('#formPhone');
    const phoneGroup = phoneInput.closest('.form-group');
    const cleanedPhone = phoneInput.value.replace(/\D/g, '');
    if (!phoneInput.value.trim() || cleanedPhone.length < 8) {
      phoneGroup.classList.add('has-error');
      hasErrors = true;
    } else {
      phoneGroup.classList.remove('has-error');
    }

    // Validate Service Required
    const serviceInput = document.querySelector('#formService');
    const serviceGroup = serviceInput.closest('.form-group');
    if (!serviceInput.value) {
      serviceGroup.classList.add('has-error');
      hasErrors = true;
    } else {
      serviceGroup.classList.remove('has-error');
    }

    // Validate Message
    const msgInput = document.querySelector('#formMessage');
    const msgGroup = msgInput.closest('.form-group');
    if (!msgInput.value.trim()) {
      msgGroup.classList.add('has-error');
      hasErrors = true;
    } else {
      msgGroup.classList.remove('has-error');
    }

    if (!hasErrors) {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const service = serviceInput.options[serviceInput.selectedIndex].text;
      const message = msgInput.value.trim();

      const waMessage = `Hello Ganga Services, I would like to get a quote:\n\n*Name*: ${name}\n*Phone*: ${phone}\n*Service*: ${service}\n*Details*: ${message}`;
      const waUrl = `https://wa.me/919381023251?text=${encodeURIComponent(waMessage)}`;

      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank');

      // Clear the form fields
      form.reset();

      // Show success alert
      if (successBanner) {
        successBanner.classList.add('active');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Auto hide success banner after 8 seconds
        setTimeout(() => {
          successBanner.classList.remove('active');
        }, 8000);
      }
    }
  });

  // Real-time error removal on input
  form.querySelectorAll('.form-control').forEach(input => {
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error')) {
        group.classList.remove('has-error');
      }
    });
  });
}

/**
 * Gallery Filter and Lightbox Component
 */
function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');

  if (!galleryItems.length) return;

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox functionality
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  let activeItems = [];

  // Update lightbox state
  const showLightboxImage = (index) => {
    const item = activeItems[index];
    if (!item) return;

    const img = item.querySelector('img');
    const captionTitle = item.querySelector('.gallery-overlay-text h4');
    const captionCategory = item.querySelector('.gallery-overlay-text span');

    if (img && lightboxImg) {
      lightboxImg.setAttribute('src', img.getAttribute('src'));
      lightboxImg.setAttribute('alt', img.getAttribute('alt') || 'Water tank cleaning service');
    }

    if (lightboxCaption) {
      const title = captionTitle ? captionTitle.innerText : '';
      const cat = captionCategory ? captionCategory.innerText : '';
      lightboxCaption.innerHTML = `<strong>${title}</strong><br><small style="opacity: 0.8; font-size: 0.85em;">${cat}</small>`;
    }

    currentIndex = index;
  };

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Find current visible items in gallery
      activeItems = Array.from(galleryItems).filter(el => el.style.display !== 'none');
      currentIndex = activeItems.indexOf(item);

      if (currentIndex === -1) return;

      lightbox.classList.add('active');
      showLightboxImage(currentIndex);
      document.body.style.overflow = 'hidden'; // Stop body scrolling
    });
  });

  // Close Lightbox
  const closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Resume scrolling
  };

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigate Lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let nextIndex = currentIndex + 1;
    if (nextIndex >= activeItems.length) {
      nextIndex = 0;
    }
    showLightboxImage(nextIndex);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = activeItems.length - 1;
    }
    showLightboxImage(prevIndex);
  };

  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNext(e);
    } else if (e.key === 'ArrowLeft') {
      showPrev(e);
    }
  });
}

/**
 * Reviews Carousel Component
 */
function initReviewsCarousel() {
  const carousel = document.getElementById('reviewsCarousel');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dots = document.querySelectorAll('#carouselDots .dot');

  if (!carousel) return;

  const updateDots = (activeIndex) => {
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  const getActiveIndex = () => {
    const scrollPos = carousel.scrollLeft;
    const card = carousel.querySelector('.review-card');
    if (!card) return 0;
    const cardWidth = card.offsetWidth;
    const gap = 24; // var(--spacing-lg)
    return Math.round(scrollPos / (cardWidth + gap));
  };

  // Scroll listener to update dots natively
  carousel.addEventListener('scroll', () => {
    updateDots(getActiveIndex());
  });

  // Prev / Next button listeners
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      const card = carousel.querySelector('.review-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 24;
      carousel.scrollBy({
        left: -(cardWidth + gap),
        behavior: 'smooth'
      });
    });

    nextBtn.addEventListener('click', () => {
      const card = carousel.querySelector('.review-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 24;
      carousel.scrollBy({
        left: cardWidth + gap,
        behavior: 'smooth'
      });
    });
  }

  // Dots click listeners
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      const card = carousel.querySelector('.review-card');
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const gap = 24;
      carousel.scrollLeft = slideIndex * (cardWidth + gap);
    });
  });
}

/**
 * 24/7 Emergency Popup Modal Logic
 */
function initEmergencyPopup() {
  // Developer/QA reset mechanism: add ?reset_popup=true to the URL to test
  if (window.location.search.includes('reset_popup=true')) {
    localStorage.removeItem('gangaEmergencyPopupDismissed');
    window.history.replaceState({}, document.title, window.location.pathname);
  }

  // Check local storage so we only show once per user (ever)
  // if (localStorage.getItem("gangaEmergencyPopupDismissed") === "true") { return; } // TEMPORARILY DISABLED FOR TESTING
  
  // Also check if we are on the contact page and the user is interacting with that form
  // We don't want to suppress the popup purely for being on the contact page, but if they are typing, we shouldn't interrupt.
  // A simple heuristic: delay the popup further if on contact page, or skip.
  const isContactPage = window.location.pathname.includes('contact-us.html');

  // Create DOM elements
  const backdrop = document.createElement('div');
  backdrop.className = 'emergency-modal-backdrop';
  backdrop.setAttribute('aria-hidden', 'true');
  
  const content = document.createElement('div');
  content.className = 'emergency-modal-content';
  content.setAttribute('role', 'dialog');
  content.setAttribute('aria-modal', 'true');
  content.setAttribute('aria-labelledby', 'emergencyModalTitle');
  content.setAttribute('tabindex', '-1');
  
  // Close Button
  const closeBtn = document.createElement('button');
  closeBtn.className = 'emergency-modal-close';
  closeBtn.setAttribute('aria-label', 'Close emergency popup');
  closeBtn.innerHTML = '&times;';
  
  // Header section
  const header = document.createElement('div');
  header.className = 'emergency-modal-header';
  
  const badge = document.createElement('div');
  badge.className = 'emergency-modal-badge';
  badge.innerHTML = '<span style="color: #25BFD1; font-size: 1.1rem; vertical-align: middle; margin-right: 4px;">⚡</span>24/7 Emergency Service';
  
  const title = document.createElement('h2');
  title.className = 'emergency-modal-title';
  title.id = 'emergencyModalTitle';
  title.textContent = '⚡ Need It Urgently?';
  
  const desc = document.createElement('p');
  desc.className = 'emergency-modal-desc';
  desc.textContent = "Call or WhatsApp us for quick water tank cleaning service.";
  
  header.appendChild(badge);
  header.appendChild(title);
  header.appendChild(desc);
  
  // Form
  const form = document.createElement('form');
  form.className = 'emergency-modal-form';
  form.noValidate = true;
  
  // Field 1: Name
  const nameField = createField('Name', 'text', 'Your Name', true);

  // Field 2: Mobile
  const phoneField = createField('Phone Number', 'tel', 'Your Phone Number', true);
  
  // Field 3: Service Required (Select)
  const serviceWrapper = document.createElement('div');
  serviceWrapper.className = 'emergency-modal-field';
  const serviceLabel = document.createElement('label');
  serviceLabel.textContent = 'Service Required *';
  const serviceSelect = document.createElement('select');
  serviceSelect.required = true;
  serviceSelect.className = 'form-control';
  const services = [
    '',
    'Residential Water Tank Cleaning',
    'Commercial Water Tank Cleaning',
    'Overhead Tank Cleaning',
    'Underground Tank Cleaning',
    'Industrial Tank Cleaning',
    'Sump & Sintex Tank Cleaning'
  ];
  services.forEach((s, idx) => {
    const opt = document.createElement('option');
    opt.value = s;
    opt.textContent = idx === 0 ? 'Select your service' : s;
    if (idx === 0) opt.disabled = true;
    if (idx === 0) opt.selected = true;
    serviceSelect.appendChild(opt);
  });
  serviceWrapper.appendChild(serviceLabel);
  serviceWrapper.appendChild(serviceSelect);
  
  // Field 4: Message (Textarea)
  const detailsWrapper = document.createElement('div');
  detailsWrapper.className = 'emergency-modal-field';
  const detailsLabel = document.createElement('label');
  detailsLabel.textContent = 'Message';
  const detailsArea = document.createElement('textarea');
  detailsArea.placeholder = 'Tell us briefly about your tank cleaning requirement...';
  detailsArea.className = 'form-control';
  detailsWrapper.appendChild(detailsLabel);
  detailsWrapper.appendChild(detailsArea);
  
  // Actions
  const actionsWrapper = document.createElement("div");
  actionsWrapper.className = "emergency-modal-actions";
  
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "btn btn-primary";
  submitBtn.style.width = "100%";
  submitBtn.textContent = "Request a Quick Call";
  
  const secondaryWrapper = document.createElement("div");
  secondaryWrapper.style.display = "flex";
  secondaryWrapper.style.gap = "8px";
  secondaryWrapper.style.marginTop = "8px";
  
  const waBtn = document.createElement("a");
  waBtn.href = "https://wa.me/919381023251";
  waBtn.className = "btn btn-outline";
  waBtn.style.flex = "1";
  waBtn.style.textAlign = "center";
  waBtn.style.justifyContent = "center";
  waBtn.style.padding = "10px 8px";
  waBtn.textContent = "WhatsApp Us";
  
  const callBtn = document.createElement("a");
  callBtn.href = "tel:+919381023251";
  callBtn.className = "btn btn-outline";
  callBtn.style.flex = "1";
  callBtn.style.textAlign = "center";
  callBtn.style.justifyContent = "center";
  callBtn.style.padding = "10px 8px";
  callBtn.textContent = "Call Now";
  
  secondaryWrapper.appendChild(waBtn);
  secondaryWrapper.appendChild(callBtn);
  
  const successMsg = document.createElement("div");
  successMsg.className = "emergency-modal-success";
  successMsg.innerHTML = "Your enquiry details are ready in WhatsApp. Send the message to contact our team.";
  
  actionsWrapper.appendChild(submitBtn);
  actionsWrapper.appendChild(secondaryWrapper);
  actionsWrapper.appendChild(successMsg);
  
  form.appendChild(nameField.wrapper);
  form.appendChild(phoneField.wrapper);
  form.appendChild(serviceWrapper);
  form.appendChild(detailsWrapper);
  form.appendChild(actionsWrapper);
  
  // Assemble Modal
  content.appendChild(closeBtn);
  content.appendChild(header);
  content.appendChild(form);
  backdrop.appendChild(content);
  document.body.appendChild(backdrop);
  
  function createField(labelText, type, placeholder, isRequired) {
    const wrapper = document.createElement('div');
    wrapper.className = 'emergency-modal-field';
    const label = document.createElement('label');
    label.textContent = labelText;
    const input = document.createElement('input');
    input.type = type;
    input.placeholder = placeholder;
    input.className = 'form-control';
    if (isRequired) input.required = true;
    wrapper.appendChild(label);
    wrapper.appendChild(input);
    return { wrapper, input };
  }
  
  let modalShown = false;
  
  const showModal = () => {
    if (modalShown) return;
    
    // Suppress if they are on contact page and interacting with contact form
    if (isContactPage && document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) {
        return; // silently abort if they are typing in contact form
    }
    
    modalShown = true;
    document.body.appendChild(backdrop);
    // Set localStorage flag so it never shows again for this user
    localStorage.setItem('gangaEmergencyPopupDismissed', 'true');
    
    // Force a small reflow to ensure the transition plays
    void backdrop.offsetWidth;
    
    document.body.classList.add('modal-open');
    backdrop.classList.add('is-active');
    backdrop.setAttribute('aria-hidden', 'false');
    
    // Focus management
    setTimeout(() => {
      content.focus();
    }, 100);
    
    // Mobile sticky bar handling
    const stickyBar = document.querySelector('.mobile-sticky-cta');
    if (stickyBar) {
      stickyBar.style.zIndex = '0';
    }
  }
  
  function hideModal() {
    document.body.classList.remove('modal-open');
    backdrop.classList.remove('is-active');
    backdrop.setAttribute('aria-hidden', 'true');
    
    // Mobile sticky bar handling
    const stickyBar = document.querySelector('.mobile-sticky-cta');
    if (stickyBar) {
      stickyBar.style.zIndex = '';
    }
    
    setTimeout(() => {
      if (backdrop.parentNode) {
        backdrop.parentNode.removeChild(backdrop);
      }
    }, 300);
  }
  
  // Close events
  closeBtn.addEventListener('click', hideModal);
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) hideModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('is-active')) {
      hideModal();
    }
  });
  
  // Form submission
  form.addEventListener("input", (e) => {
    const wrapper = e.target.closest(".emergency-modal-field");
    if (wrapper && wrapper.classList.contains("has-error")) {
      wrapper.classList.remove("has-error");
    }
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let hasErrors = false;
    
    // Validate Name
    if (!nameField.input.value.trim()) {
      nameField.wrapper.classList.add("has-error");
      if (!nameField.wrapper.querySelector(".error-msg")) {
        const errorMsg = document.createElement("span");
        errorMsg.className = "error-msg";
        errorMsg.textContent = "Please enter your name.";
        nameField.wrapper.appendChild(errorMsg);
      }
      hasErrors = true;
    } else {
      nameField.wrapper.classList.remove("has-error");
    }
    
    // Validate Phone
    const phoneRegex = /^[0-9+\\-\\s]{8,20}$/;
    if (!phoneRegex.test(phoneField.input.value.trim())) {
      phoneField.wrapper.classList.add("has-error");
      if (!phoneField.wrapper.querySelector(".error-msg")) {
        const errorMsg = document.createElement("span");
        errorMsg.className = "error-msg";
        errorMsg.textContent = "Please enter a valid phone number.";
        phoneField.wrapper.appendChild(errorMsg);
      }
      hasErrors = true;
    } else {
      phoneField.wrapper.classList.remove("has-error");
    }
    
    // Validate Service
    if (!serviceSelect.value) {
      serviceWrapper.classList.add("has-error");
      if (!serviceWrapper.querySelector(".error-msg")) {
        const errorMsg = document.createElement("span");
        errorMsg.className = "error-msg";
        errorMsg.textContent = "Please select a service.";
        serviceWrapper.appendChild(errorMsg);
      }
      hasErrors = true;
    } else {
      serviceWrapper.classList.remove("has-error");
    }
    
    const name = nameField.input.value.trim();
    const phone = phoneField.input.value.trim();
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const message = detailsArea.value.trim();
    
    if (hasErrors) return;
    
    const waMessage = `Hello Ganga Water Tank Cleaning Services,\n\nI would like to enquire about water tank cleaning.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message || 'None'}`;
    
    const waUrl = `https://wa.me/919381023251?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, '_blank');
    
    // Show success message
    successMsg.style.display = 'block';
    
    // Close after a brief delay
    setTimeout(() => {
      hideModal();
    }, 4000);
  });
  
  // Time delay trigger (wait 5000ms)
  const timer = setTimeout(showModal, 3000);
  
  // Exit intent for desktop (Mouse leaves the top of viewport)
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !modalShown) {
      showModal();
      clearTimeout(timer); // Cancel the timer if shown by exit intent
    }
  });
}


