/* Scroll DOWN to Project Section */

document.querySelectorAll('a[href*="#"]').forEach(anchor => { // all <a> pointing to same page (#)
  anchor.addEventListener('click', function(e) {
    const targetHref = this.getAttribute('href');
    if (targetHref.startsWith('#') || targetHref.includes(window.location.pathname)) {
      e.preventDefault();
      const hashIndex = targetHref.indexOf('#');
      const targetSelector = targetHref.substring(hashIndex);
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const isProjectsLink = this.parentElement.classList.contains('nav-item-projects');
        const offset = isProjectsLink ? window.innerHeight * 0.1 : 0;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        history.pushState(null, null, targetSelector);
      }
    }
  });
});



/* Scroll UP Button */
const scrollUpBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.add('show');
    scrollUpBtn.classList.remove('hide');
  } else {
    scrollUpBtn.classList.add('hide');
    scrollUpBtn.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

scrollUpBtn.addEventListener('click', scrollToTop);
