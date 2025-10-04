document.addEventListener("DOMContentLoaded", function () {
  const enlaces = {
    "btn-templo": "templo/templo.html",
    "btn-ofrendas": "#ofrendas",
    "btn-rituales": "https://discotecalalogia.com/eventos/#eventos",
    "btn-momentos": "https://discotecalalogia.com/#galeria",
    "btn-opinion": "https://www.google.com/maps/place/La+Logia/@6.2513021,-75.5873938,18z/data=!4m6!3m5!1s0x8e44293f52386fc1:0x64563794833ae5d0!8m2!3d6.2497539!4d-75.5885553!16s%2Fg%2F11scks2g5b?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
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
