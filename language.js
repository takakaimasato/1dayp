// Preserve section links when switching language. No cookies, storage or network calls.
function updateLanguageLinks() {
  for (const link of document.querySelectorAll('[data-language-link]')) {
    const destination = new URL(link.getAttribute('href'), document.baseURI);
    destination.hash = window.location.hash;
    link.href = destination.href;
  }
}
updateLanguageLinks();
window.addEventListener('hashchange', updateLanguageLinks);
