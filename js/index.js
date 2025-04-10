document.querySelectorAll('a[href*="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetHref = this.getAttribute('href');
    if (targetHref.startsWith('#') || targetHref.includes(window.location.pathname)) {
      e.preventDefault();
      const hashIndex = targetHref.indexOf('#');
      const targetSelector = targetHref.substring(hashIndex);
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        // Calcula la posición del elemento objetivo
        const elementPosition = targetElement.getBoundingClientRect().top;
        // Offset: 10% de la altura de la ventana
        const offset = window.innerHeight * 0.1;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        history.pushState(null, null, targetSelector);
      }
    }
  });
});


window.addEventListener("load", async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    var articles = data.reverse().slice(0, 3).map(jsonProjectToHtmlArticle);

    const container = document.querySelector("div.projects-container");
    container.innerHTML = "";
    articles.forEach((article) => container.appendChild(article));
  } catch (error) {
    console.log(error);
  } finally {
    document.querySelector("section.recent-projects").removeAttribute("hidden");
  }
});