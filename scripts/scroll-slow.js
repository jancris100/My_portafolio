
    const links = document.querySelectorAll("nav a, #know-more a");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
  
        const targetId = this.getAttribute("href").substring(1); // Obtener el ID de la sección objetivo
        const targetElement = document.getElementById(targetId); // Obtener el elemento de la sección objetivo
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth", // Scroll suave
            block: "start" // Desplazarse al inicio de la sección
          });
        }
      });
    });
