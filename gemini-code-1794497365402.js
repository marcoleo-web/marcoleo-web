const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn?.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  menuBtn.setAttribute('aria-expanded', String(!isHidden));
});

// Delegación de eventos para cerrar el menú al hacer clic en cualquier enlace
mobileMenu?.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    mobileMenu.classList.add('hidden');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }
});

// Simulación de envío de formulario
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  formSuccess?.classList.remove('hidden');
  contactForm.reset();
});