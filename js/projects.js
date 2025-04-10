window.addEventListener("load", async () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const currentProjectId = params.get("id");
      if (!currentProjectId) {
        throw new Error("Project ID not provided");
      }
  
      const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects");
      const projects = await response.json();
  
      // Filtramos por el proyecto en cuestión
      const currentProject = projects.find(proj => proj.uuid === currentProjectId);
      if (!currentProject) {
        throw new Error("Project not found");
      }
  
      // Actualización del DOM
      document.querySelector("section#project h1.title").textContent = currentProject.name;
      document.querySelector("section#project .subtitle .UI-design-title").textContent = currentProject.description;
      document.querySelector("section#project .subtitle .completed-title-data").textContent = currentProject.completed_on;
      const projectImg = document.querySelector("section#project .project-image-section .project-image");
      projectImg.src = currentProject.image;
      projectImg.alt = currentProject.name;
      document.querySelector("section#project article.project-description").innerHTML = currentProject.content;
  
      loadOtherProjects(currentProjectId, projects);
    } catch (error) {
      console.error("Error loading project:", error);
    }
  });
  
  async function loadOtherProjects(currentProjectId, allProjects) {
    try {
      // Obtenemos el resto de proyectos (máximo 3)
      const otherProjects = allProjects.filter(proj => proj.uuid !== currentProjectId);
      const selectedProjects = otherProjects.slice(0, 3);
      const container = document.querySelector(".projects-container");
      container.innerHTML = ""; // Limpiar el contenedor
  
      selectedProjects.forEach(project => {
        const article = createProjectCard(project);
        container.appendChild(article);
      });
    } catch (error) {
      console.error("Error loading other projects:", error);
    }
  }
  
  function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "project-card";
  
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = project.name;
    article.appendChild(img);
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "card-content";
  
    const h3 = document.createElement("h3");
    h3.textContent = project.name;
    contentDiv.appendChild(h3);
  
    const p = document.createElement("p");
    p.textContent = project.description;
    contentDiv.appendChild(p);
  
    const a = document.createElement("a");
    a.href = `./projects.html?id=${project.uuid}`;
    a.textContent = "Learn more";
    contentDiv.appendChild(a);
  
    article.appendChild(contentDiv);
    return article;
  }
  