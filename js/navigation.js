/* Menu de navigation : tiroir (téléphone/tablette) et sous-menus.
   Le reste (animations, affichage) est géré par le CSS : voir layout.css. */
const nav = document.querySelector('.site-nav');
const toggle = nav.querySelector('.nav-toggle');
const panel = nav.querySelector('.nav-panel');
const dropdownButtons = nav.querySelectorAll('.dropbtn');

// Ouvre ou ferme un sous-menu
function setDropdown(button, open) {
  button.setAttribute('aria-expanded', open);
  button.parentElement.classList.toggle('open', open);
}

// Ferme tous les sous-menus (sauf éventuellement un)
function closeDropdowns(except) {
  dropdownButtons.forEach(function (button) {
    if (button !== except) setDropdown(button, false);
  });
}

// Ouvre ou ferme le tiroir
function setMenu(open) {
  panel.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('menu-open', open);
  if (!open) closeDropdowns();
}

toggle.addEventListener('click', function () {
  setMenu(!panel.classList.contains('open'));
});

nav.querySelector('.nav-close').addEventListener('click', function () {
  setMenu(false);
  toggle.focus();
});

dropdownButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const willOpen = button.getAttribute('aria-expanded') !== 'true';
    closeDropdowns(button);
    setDropdown(button, willOpen);
  });
});

// Un clic en dehors du menu, ou la touche Échap, ferme tout
document.addEventListener('click', function (event) {
  if (!nav.contains(event.target)) {
    setMenu(false);
    closeDropdowns();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    setMenu(false);
    closeDropdowns();
  }
});
