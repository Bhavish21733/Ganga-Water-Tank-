/**
 * ============================================================
 * GANGA — CONTACT.JS (Form validation + WhatsApp redirect)
 * ============================================================
 * On submission: validates fields → builds message → opens
 * WhatsApp with prefilled text. No fake backend call.
 * ============================================================
 */

(function () {
  'use strict';

  const WA_NUMBER = '919381023251';
  const form      = document.getElementById('enquiry-form');
  const submitBtn = document.getElementById('form-submit');
  const formMsg   = document.getElementById('form-message');

  if (!form) return;

  /* ── VALIDATION HELPERS ───────────────────────────────────── */
  function showError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    const msg   = document.getElementById(msgId);
    field?.classList.add('error');
    if (msg) { msg.textContent = message; msg.classList.add('visible'); }
  }

  function clearError(fieldId, msgId) {
    const field = document.getElementById(fieldId);
    const msg   = document.getElementById(msgId);
    field?.classList.remove('error');
    msg?.classList.remove('visible');
  }

  function validatePhone(phone) {
    // Allow Indian formats: 10-digit, or with +91/0 prefix, spaces, dashes
    const stripped = phone.replace(/[\s\-().]/g, '');
    return /^(\+91|0|91)?[6-9]\d{9}$/.test(stripped);
  }

  function validateField(id, msgId, fn, message) {
    const val = document.getElementById(id)?.value?.trim();
    if (!fn(val)) {
      showError(id, msgId, message);
      return false;
    }
    clearError(id, msgId);
    return true;
  }

  function isNotEmpty(v) { return v && v.length > 0; }
  function isValidName(v) { return v && v.length >= 2; }

  /* ── LIVE VALIDATION ──────────────────────────────────────── */
  ['enquiry-name', 'enquiry-phone', 'enquiry-service'].forEach(id => {
    const el = document.getElementById(id);
    el?.addEventListener('input', () => clearError(id, id + '-error'));
    el?.addEventListener('change', () => clearError(id, id + '-error'));
  });

  /* ── BUILD WHATSAPP MESSAGE ───────────────────────────────── */
  function buildMessage() {
    const name      = document.getElementById('enquiry-name')?.value?.trim() || '';
    const phone     = document.getElementById('enquiry-phone')?.value?.trim() || '';
    const service   = document.getElementById('enquiry-service')?.value || '';
    const message   = document.getElementById('enquiry-message')?.value?.trim() || '';
    const emergency = document.querySelector('input[name="emergency"]:checked')?.value || 'no';

    const serviceLabel = service === 'other' ? 'Other / General Enquiry' : service;

    let text = `Hello Ganga Water Tank Cleaning Services,\n\n`;
    text += `I would like to enquire about water tank cleaning.\n\n`;
    text += `Name: ${name}\n`;
    text += `Phone: ${phone}\n`;
    text += `Service: ${serviceLabel}\n`;
    text += `Emergency Requirement: ${emergency === 'yes' ? 'yes' : 'no'}\n`;
    text += `Message: ${message}`;

    return text;
  }

  /* ── FORM SUBMIT ──────────────────────────────────────────── */
  form.addEventListener('submit', e => {
    e.preventDefault();

    // Clear previous message
    if (formMsg) { formMsg.className = 'form-message'; formMsg.hidden = true; }

    // Validate
    let valid = true;
    valid = validateField('enquiry-name',    'enquiry-name-error',    isValidName, 'Please enter your full name (at least 2 characters).') && valid;
    valid = validateField('enquiry-phone',   'enquiry-phone-error',   validatePhone, 'Please enter a valid Indian mobile number.') && valid;
    valid = validateField('enquiry-service', 'enquiry-service-error', isNotEmpty, 'Please select the service you require.') && valid;

    if (!valid) {
      // Focus first errored field
      const firstError = form.querySelector('.form-input.error, .form-select.error');
      firstError?.focus();
      return;
    }

    // Build and encode message
    const message   = buildMessage();
    const encoded   = encodeURIComponent(message);
    const waURL     = `https://wa.me/${WA_NUMBER}?text=${encoded}`;

    // Show instruction before opening WhatsApp
    if (formMsg) {
      formMsg.innerHTML = `
        <div class="form-success-inner">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
          <span>Your enquiry is ready. <strong>WhatsApp is opening now</strong> — please tap <em>Send</em> to submit your message to our team.</span>
        </div>
      `;
      formMsg.className = 'form-message form-message--success';
      formMsg.hidden = false;
    }

    // Disable button briefly
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Opening WhatsApp…';
    }

    // Open WhatsApp
    setTimeout(() => {
      window.open(waURL, '_blank', 'noopener,noreferrer');

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.543 4.068 1.49 5.785L.057 23.01a.5.5 0 00.607.65l5.47-1.43A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.662-.52-5.18-1.422l-.373-.22-3.863 1.01 1.027-3.755-.235-.387A9.96 9.96 0 012 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10z"/></svg>
          Send Again via WhatsApp
        `;
      }
    }, 400);
  });

  /* ── EMERGENCY RADIO HIGHLIGHT ────────────────────────────── */
  const emergencyYes = document.getElementById('emergency-yes');
  const emergencyNote = document.getElementById('emergency-note');
  if (emergencyYes && emergencyNote) {
    function updateEmergency() {
      const isEmergency = emergencyYes.checked;
      emergencyNote.hidden = !isEmergency;
    }
    document.querySelectorAll('input[name="emergency"]').forEach(r => {
      r.addEventListener('change', updateEmergency);
    });
    updateEmergency();
  }

  /* ── PHONE INPUT TYPE ─────────────────────────────────────── */
  const phoneInput = document.getElementById('enquiry-phone');
  if (phoneInput) {
    phoneInput.setAttribute('inputmode', 'tel');
    phoneInput.setAttribute('type', 'tel');
  }

})();
