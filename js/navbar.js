document.addEventListener('DOMContentLoaded', function () {
  const DROPDOWN_DELAY = 70; // ms

  // Manage dropdown open/close with delay
  document.querySelectorAll('.nav-item.dropdown').forEach(function (item) {
    let timer = null;
    const btn = item.querySelector('.dropbtn');
    const menu = item.querySelector('.dropdown-menu');

    function open() {
      clearTimeout(timer);
      item.classList.add('open');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }

    function close() {
      item.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    item.addEventListener('mouseenter', open);
    item.addEventListener('mouseleave', function () {
      timer = setTimeout(close, DROPDOWN_DELAY);
    });

    if (menu) {
      menu.addEventListener('mouseenter', function () {
        clearTimeout(timer);
        open();
      });
      menu.addEventListener('mouseleave', function () {
        timer = setTimeout(close, DROPDOWN_DELAY);
      });
    }
  });

  // Mobile menu toggle
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const opened = menu.classList.toggle('show');
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
      // manage overlay and body lock
      if (opened) {
        // ensure drawer header exists
        if (!menu.querySelector('.nav-drawer-header')) {
          const header = document.createElement('div');
          header.className = 'nav-drawer-header';
          const left = document.createElement('div');
          left.className = 'menu-left';
          const logo = document.createElement('img');
          logo.src = document.querySelector('.brand .logo')?.src || '';
          logo.alt = 'logo';
          logo.style.width = '3rem';
          logo.style.height = '3rem';
          logo.style.borderRadius = '50%';
          left.appendChild(logo);
          header.appendChild(left);

          const title = document.createElement('div');
          title.className = 'menu-title';
          title.textContent = 'Menu';
          header.appendChild(title);

            // insert header (logo + title). close handled by overlay or toggle
            menu.insertBefore(header, menu.firstChild);
            const sep = document.createElement('div'); sep.className = 'drawer-sep';
            menu.insertBefore(sep, header.nextSibling);
        }
        document.body.classList.add('drawer-open');
        let overlay = document.querySelector('.drawer-overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.className = 'drawer-overlay';
          document.body.appendChild(overlay);
        }
        // show overlay
        requestAnimationFrame(()=> overlay.classList.add('show'));
        overlay.addEventListener('click', closeDrawer);
      } else {
        closeDrawer();
      }
    });
  }

  // On small screens, allow dropdowns to open on click (tap) instead of hover
  function isSmallScreen() {
    return window.innerWidth <= 980;
  }

  document.querySelectorAll('.nav-item.dropdown').forEach(function (item) {
    const btn = item.querySelector('.dropbtn');
    if (!btn) return;
    // Use pointerdown for immediate response on touch devices (opens on first tap)
    btn.addEventListener('pointerdown', function (e) {
      if (isSmallScreen()) {
        e.preventDefault();
        e.stopPropagation();
        const open = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    });
  });

  function closeDrawer() {
    if (menu) menu.classList.remove('show');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('drawer-open');
    const overlay = document.querySelector('.drawer-overlay');
    if (overlay) {
      overlay.classList.remove('show');
      overlay.addEventListener('transitionend', function () {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      }, {once:true});
    }
    // close all open submenus
    document.querySelectorAll('.nav-item.open').forEach(function(i){
      i.classList.remove('open');
      const b = i.querySelector('.dropbtn'); if (b) b.setAttribute('aria-expanded','false');
    });
  }
});
