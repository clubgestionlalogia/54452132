document.addEventListener("DOMContentLoaded", function () {
  const enlaces = {
    "btn-templo": "templo/templo.html",
    "btn-ofrendas": "ofrendas/ofrendas.html",
    "btn-eventos": "eventos/eventos.html",
    "btn-momentos": "momentos/momentos.html",
    "btn-opinion": "opinion/opinion.html",
    "btn-inicio": "https://discotecalalogia.com/",
    "btn-whatsapp": "https://wa.me/573202877325?text=Hola.%20Quiero%20vivir%20una%20experiencia%20en%20La%20Logia.%20%C2%BFMe%20pueden%20orientar%3F",
    "btn-instagram": "https://www.instagram.com/lalogia.med/?hl=es",
    "btn-facebook": "https://www.facebook.com/LaLogiaDiscoteca/?locale=es_LA",
    "btn-pqrs": "https://discotecalalogia.com/"
  };
  for (const id in enlaces) {
    const boton = document.getElementById(id);
    if (boton) {
      boton.setAttribute("href", enlaces[id]);
    }
  }
  });
