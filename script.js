/* Walk-Up Hype — script.js
   Handles: smooth scroll nav, audio play/pause for demo cards */

(function () {
  'use strict';

  /* ---- Smooth scroll for any anchor that points to an ID ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ---- Voice Demo: play / pause audio ---- */
  var currentAudio = null;
  var currentCard  = null;
  var currentBtn   = null;

  document.querySelectorAll('.play-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var card      = btn.closest('.demo-card');
      var audioSrc  = btn.getAttribute('data-audio');

      /* Clicking the same button again → pause */
      if (currentAudio && currentCard === card) {
        currentAudio.pause();
        currentAudio = null;
        currentCard  = null;
        currentBtn   = null;
        card.classList.remove('playing');
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
        return;
      }

      /* Stop whatever is already playing */
      if (currentAudio) {
        currentAudio.pause();
        currentCard.classList.remove('playing');
        currentBtn.classList.remove('playing');
        currentBtn.querySelector('.play-icon').textContent = '▶';
      }

      /* Play the new audio */
      var audio = new Audio(audioSrc);
      currentAudio = audio;
      currentCard  = card;
      currentBtn   = btn;

      card.classList.add('playing');
      btn.classList.add('playing');
      btn.querySelector('.play-icon').textContent = '⏸';

      audio.play().catch(function () {
        /* Audio file not yet available — show friendly message */
        card.classList.remove('playing');
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
        currentAudio = null;
        currentCard  = null;
        currentBtn   = null;
        var notice = card.querySelector('.demo-unavailable');
        if (!notice) {
          notice = document.createElement('p');
          notice.className = 'demo-unavailable';
          notice.style.cssText = 'font-size:12px;color:#F5A623;margin-top:-8px;';
          notice.textContent = 'Audio coming soon';
          btn.insertAdjacentElement('afterend', notice);
        }
      });

      audio.addEventListener('ended', function () {
        card.classList.remove('playing');
        btn.classList.remove('playing');
        btn.querySelector('.play-icon').textContent = '▶';
        currentAudio = null;
        currentCard  = null;
        currentBtn   = null;
      });
    });
  });

  /* ---- Form: simple feedback on submit ---- */
  var form = document.querySelector('.email-capture');
  if (form) {
    form.addEventListener('submit', function (e) {
      /* If Formspree ID is still placeholder, intercept and show message */
      if (form.action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        var btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Thanks! We\'ll be in touch.';
        btn.disabled = true;
        btn.style.opacity = '0.7';
      }
      /* Otherwise let Formspree handle the POST normally */
    });
  }

})();
