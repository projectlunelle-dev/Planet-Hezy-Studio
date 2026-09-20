const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menu?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.textContent = isOpen ? 'MENU_−' : 'MENU_+';
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    if (menuButton) menuButton.textContent = 'MENU_+';
  });
});

const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const copyButton = document.querySelector('.copy-email');
copyButton?.addEventListener('click', async () => {
  const email = copyButton.dataset.email;
  if (!email) return;

  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = 'EMAIL COPIED ✓';
  } catch {
    copyButton.textContent = email;
  }

  window.setTimeout(() => {
    copyButton.textContent = 'COPY EMAIL ADDRESS';
  }, 2200);
});
