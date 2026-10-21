'use strict';
document.documentElement.classList.add('js');
const main = document.querySelector('main');
const professionalWork = document.querySelector('#experience');
const independentWork = document.querySelector('#work');
main.insertBefore(professionalWork, independentWork);

const appliedProjects = document.querySelector('.applied-list');
const hybridSwitch = document.querySelector('[aria-labelledby="switch-title"]');
const paymentSimulator = document.querySelector('[aria-labelledby="payment-title"]');
const partnerIntegration = document.querySelector('[aria-labelledby="partner-title"]');
appliedProjects.append(hybridSwitch, paymentSimulator, partnerIntegration);

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menu.hidden = false;
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  navigation.classList.toggle('open', !expanded);
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
