(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const openButton = document.getElementById('open-letter');
  const message = document.getElementById('surprise-message');
  const closeButton = document.getElementById('close-message');
  if (openButton && message) {
    openButton.addEventListener('click', () => {
      openButton.classList.add('opened');
      openButton.setAttribute('aria-expanded', 'true');
      window.setTimeout(() => {
        message.hidden = false;
        message.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      }, 280);
    });
    if (closeButton) closeButton.addEventListener('click', () => {
      message.hidden = true;
      openButton.classList.remove('opened');
      openButton.setAttribute('aria-expanded', 'false');
      openButton.focus();
    });
  }
})();