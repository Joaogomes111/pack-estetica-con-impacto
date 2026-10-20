const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Añade aquí el enlace definitivo cuando esté disponible.
const CHECKOUT_URL = '';
const checkoutButton = document.querySelector('[data-checkout-button]');
const checkoutStatus = document.getElementById('checkout-status');

checkoutButton?.addEventListener('click', () => {
  if (CHECKOUT_URL.trim()) {
    window.location.assign(CHECKOUT_URL);
    return;
  }

  if (checkoutStatus) checkoutStatus.hidden = false;
});
