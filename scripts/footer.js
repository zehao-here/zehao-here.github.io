(() => {
  const FOOTER_HTML = `
    <div class="container">
      <hr style="border: 0; border-top: 1px solid #fff; margin-bottom: 1.2rem; width: 75%; opacity: 0.35;">
      <p>&copy; <span id="year"></span> Zehao Zhang. All rights reserved.</p>
      <p>Last updated October 2025.</p>
    </div>
  `;

  const renderFooter = () => {
    const footer = document.querySelector('[data-footer]');
    if (!footer) return;

    footer.innerHTML = FOOTER_HTML.trim();
    const yearSpan = footer.querySelector('#year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();

