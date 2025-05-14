document.addEventListener("DOMContentLoaded", function() {
    const mapas = document.querySelectorAll(".mapa iframe");
    mapas.forEach(iframe => {
        iframe.setAttribute("src", iframe.getAttribute("data-src"));
    });
});