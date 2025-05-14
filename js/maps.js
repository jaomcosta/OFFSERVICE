document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os iframes dos mapas
    const mapIframes = document.querySelectorAll('.mapa iframe');
    
    // Carrega cada iframe apenas quando estiver visível na tela
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const iframe = entry.target;
          iframe.src = iframe.dataset.src; // Usa um atributo "data-src" para delay
          observer.unobserve(iframe); // Para de observar após carregar
        }
      });
    }, { threshold: 0.1 }); // Dispara quando 10% do iframe estiver visível

    // Configura os iframes para observação
    mapIframes.forEach(iframe => {
      iframe.dataset.src = iframe.src; // Armazena o src original
      iframe.removeAttribute('src'); // Remove o src inicial
      observer.observe(iframe); // Inicia a observação
    });
  });