const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const mobileCta = document.querySelector('.mobile-cta');
const hero = document.querySelector('.hero');
if (mobileCta && hero) {
  const updateMobileCta = () => {
    mobileCta.hidden = hero.getBoundingClientRect().bottom > 0;
  };
  window.addEventListener('scroll', updateMobileCta, { passive: true });
  window.addEventListener('resize', updateMobileCta);
  window.addEventListener('pageshow', updateMobileCta);
  updateMobileCta();
}
