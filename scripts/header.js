(() => {
  const HEADER_HTML = `
    <div class="container">
      <div class="brand">
        <h1>Zehao Zhang</h1>
        <p>PhD Student, HKU Business School</p>
      </div>
      <nav aria-label="Primary" data-nav="primary">
        <ul class="nav-list">
          <li><a href="index.html" data-nav-link>Home</a></li>
          <li><a href="research.html" data-nav-link>Research</a></li>
          <!-- <li><a href="publications.html" data-nav-link>Publications</a></li> -->
          <!-- <li><a href="teaching.html" data-nav-link>Teaching</a></li> -->
          <li><a href="contact.html" data-nav-link>Contact</a></li>
        </ul>
      </nav>
    </div>
  `;

  const highlightActiveLink = (navEl) => {
    const links = navEl.querySelectorAll('[data-nav-link]');
    const currentPath = window.location.pathname.replace(/\+/g, '/');

    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkPath = new URL(href, window.location.origin).pathname;
      if (linkPath === currentPath || currentPath.endsWith(href)) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  const renderHeader = () => {
    const header = document.querySelector('[data-header]');
    if (!header) return;

    header.innerHTML = HEADER_HTML.trim();
    const nav = header.querySelector('[data-nav="primary"]');
    if (nav) {
      highlightActiveLink(nav);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderHeader);
  } else {
    renderHeader();
  }
})();

