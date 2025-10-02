
        // Objeto con la información detallada de cada servicio
        const serviceData = {
            'Matrimonios': {
        title: 'Planificación de Matrionios 👰',
        // Se usan saltos de línea (\n) en lugar de <br> para un manejo más limpio del texto.
        description: 'Ofrecemos una planificación integral para bodas, asegurando que cada detalle refleje tu estilo personal. Nuestro objetivo es que disfrutes de tu día especial sin preocupaciones. \n\n Nuestros planes: \n **Plan Básico:** Incluye una asesoría completa con todos los tips para una organización exitosa. \n **Plan Intermedio:** Agrega a la asesoría la búsqueda de servicios y una agenda de planificación. \n **Plan Plus:** El servicio más completo, con asesoría completa, agenda de planificación y la gestión total de proveedores, incluyendo el lugar, fotografía, música, banquetería, vestuario y más.'
    },
            'cumpleanos': {
                title: 'Fiestas de Cumpleaños a Medida 🎂',
                description: 'Desde fiestas temáticas infantiles hasta celebraciones elegantes para adultos, nuestro equipo se encarga de la animación, el catering, la música y la decoración personalizada para crear un cumpleaños inolvidable.'
            },
            'bautizos': {
                title: 'Organización de Bautizos con Encanto 🙏',
                description: 'Creamos ambientes serenos y bellos para bautizos. Nos encargamos de la decoración temática y coordinamos con la iglesia y el lugar de la recepción para una celebración llena de paz y alegría.'
            },
            'corporativos': {
                title: 'Eventos Corporativos Profesionales 💼',
                description: 'Especialistas en la organización de eventos corporativos, desde lanzamientos de productos hasta cenas de gala. Nos ocupamos del branding, la logística y la presentación impecable para que tu marca brille.'
            },
            'graduaciones': {
                title: 'Celebraciones de Graduación 🎓',
                description: 'Organizamos la ceremonia, la fiesta y todos los detalles para una celebración de fin de etapa inolvidable. Te ayudamos a conmemorar este gran logro con tus amigos y familiares.'
            },
            'aniversarios': {
                title: 'Aniversarios Memorables 💑',
                description: 'Celebramos tu historia de amor, renovando los votos y creando un momento especial para recordar cada año. Cada detalle está diseñado para reflejar el camino que han recorrido juntos.'
            },
            'Baby Shower y Revelacion de genero': {
                title: 'Baby Shower y Revelación de Género \n 👶',
                description: 'Celebra la dulce espera y el emocionante momento de revelar el género de tu bebé con una fiesta inolvidable. Nuestro servicio incluye la planificación completa, decoración temática, actividades divertidas y el diseño de un momento "WOW" para la gran revelación. Hacemos que cada detalle sea perfecto, permitiéndote disfrutar de la alegría junto a tus seres queridos.'
            },
        };

        // Objeto para la galería de imágenes
        // Tamaño de imagenes 600x400
        const galleryData = {
            'Bautizos': [
                'https://www.decoracionesyglobostete.com/data/4462/galerias/99558d1af4d23b088a572c9070fd0bcc799e485a.jpeg',
                'https://i.pinimg.com/originals/e0/54/4c/e0544c39fffb802077c679e528fe550e.jpg',
                'https://dulcerecuerdocl.com/wp-content/uploads/2022/10/136.png',
                'https://i.pinimg.com/736x/03/44/e4/0344e47224c1367be914d1b9a2253f9e.jpg'
            ],
            'Matrimonios': [
                'componentes/img/casamiento1.png',
                'https://img.freepik.com/foto-gratis/novio-que-pone-anillo-dedo-novia_1157-338.jpg?semt=ais_hybrid&w=740&q=80',
                'https://www.riberadelcorneja.es/wp-content/uploads/2022/10/LorenaAntonio-715-1024x683.jpg',
                'https://rodriguezmansilla.com/wp-content/uploads/2018/04/389_leti-antoine-casamiento-diferente-buenos-aires_050.jpg'

            ],
            'Cumpleanos': [
                'componentes/img/menorde15.png',
                'componentes/img/mis15.png',
                'componentes/img/mayores a 15.png'
            ],
            'Corporativos': [
                'https://eventosbcn.com/wp-content/uploads/2022/04/four-smiling-business-people-at-buffet-table-scaled.jpg',
                'https://placehold.co/600x400/DCC5B6/333333?text=Corporativo+2',
                'https://placehold.co/600x400/DCC5B6/333333?text=Corporativo+3'
            ],
            
            'Aniversarios': [
                'https://adrahostel.com/wp-content/uploads/elementor/thumbs/pedida_de_mano_antigua-r764di0kwsapzd491tlsp5d7cspyne8shhnh9w3p28.jpg',
                'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5wRWrWt4FpQunV-0c8t4DraYQeOOIZEbxzhgkAVBiWvY4YY3yGRn6scCMWLHLdJLXObxYtaBTt3icsPaII7rX6F2VxPkFDZSGU-3Gh3pexpqtKd0hjVDb0gKSWI5HFaWLmRFo3PxaGxZp/s640/C%25C3%25B3mo-organizar-despedida-de-soltera.jpg',
                'https://placehold.co/600x400/DCC5B6/333333?text=Aniversario+3'
            ],
            'Graduaciones': [
                'https://placehold.co/600x400/DCC5B6/333333?text=Graduación+1',
                'https://placehold.co/600x400/DCC5B6/333333?text=Graduación+2',
                'https://placehold.co/600x400/DCC5B6/333333?text=Graduación+3'
            ],
            'Celebraciones': [
                'https://placehold.co/600x400/DCC5B6/333333?text=Celebración+1',
                'https://placehold.co/600x400/DCC5B6/333333?text=Celebración+2',
                'https://placehold.co/600x400/DCC5B6/333333?text=Celebración+3'
            ]
        };

        let currentSlide = 0;
        let slideCount;
        let slidesPerView;

        let currentGalleryCategory = '';
        let currentGalleryIndex = 0;

        document.addEventListener('DOMContentLoaded', () => {
            initCarousel();
            populateContactForm();
            window.addEventListener('resize', initCarousel);
        });

// ========================
// Funciones del Carrusel
// ========================
function initCarousel() {
  const carouselTrack = document.getElementById('carousel-track');
  slideCount = carouselTrack.children.length;
  slidesPerView = getSlidesPerView();
  currentSlide = 0;
  updateCarousel();
}

function getSlidesPerView() {
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function nextSlide() {
  if (currentSlide < slideCount - slidesPerView) {
    currentSlide++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateCarousel();
  }
}

function updateCarousel() {
  const carouselTrack = document.getElementById('carousel-track');
  const offset = -currentSlide * (100 / slidesPerView);
  carouselTrack.style.transform = `translateX(${offset}%)`;

  document.getElementById('prev-btn').disabled = (currentSlide === 0);
  document.getElementById('next-btn').disabled = (currentSlide >= slideCount - slidesPerView);
}

// ========================
// Modales de Servicio
// ========================
function showServiceDetails(serviceId) {
  const service = serviceData[serviceId];
  if (service) {
    document.getElementById('modal-title').innerText = service.title;
    document.getElementById('modal-description').innerText = service.description;
    const modal = document.getElementById('service-modal');
    modal.classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('modal-content').classList.remove('scale-95', 'opacity-0');
      document.getElementById('modal-content').classList.add('scale-100', 'opacity-100');
    }, 10);
  }
}

function hideServiceDetails() {
  const modal = document.getElementById('service-modal');
  document.getElementById('modal-content').classList.remove('scale-100', 'opacity-100');
  document.getElementById('modal-content').classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

// ========================
// Galería de Fotos
// ========================
function openGalleryModal(category) {
  if (galleryData[category] && galleryData[category].length > 0) {
    currentGalleryCategory = category;
    currentGalleryIndex = 0;
    updateGalleryModal();
    document.getElementById('gallery-modal').classList.remove('hidden');
  }
}

function closeGalleryModal() {
  document.getElementById('gallery-modal').classList.add('hidden');
}

function nextPhoto() {
  const images = galleryData[currentGalleryCategory];
  if (currentGalleryIndex < images.length - 1) {
    currentGalleryIndex++;
    updateGalleryModal();
  }
}

function prevPhoto() {
  if (currentGalleryIndex > 0) {
    currentGalleryIndex--;
    updateGalleryModal();
  }
}

function updateGalleryModal() {
  const images = galleryData[currentGalleryCategory];
  const imgElement = document.getElementById('gallery-image');
  imgElement.src = images[currentGalleryIndex];
  document.getElementById('gallery-counter').innerText = `${currentGalleryIndex + 1} / ${images.length}`;
}

// Navegación con teclado en galería
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("gallery-modal");
  if (modal.classList.contains("hidden")) return;

  if (e.key === "Escape") closeGalleryModal();
  if (e.key === "ArrowRight") nextPhoto();
  if (e.key === "ArrowLeft") prevPhoto();
});

// ========================
// Formulario de Contacto
// ========================
function populateContactForm() {
  const selectElement = document.getElementById('evento');
  if (!selectElement) return;

  for (const key in serviceData) {
    if (serviceData.hasOwnProperty(key)) {
      const option = document.createElement('option');
      option.value = key;
      option.text = serviceData[key].title.replace(/[\uD800-\uDBFF\uDC00-\uDFFF]/g, '').trim();
      selectElement.appendChild(option);
    }
  }
}

function sendToWhatsApp(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const evento = document.getElementById('evento-deseado').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{8,15}$/;

  if (!nombre || !apellido || !telefono || !correo || !evento || !mensaje) {
    alert('Por favor, complete todos los campos obligatorios del formulario.');
    return;
  }

  if (!nameRegex.test(nombre) || !nameRegex.test(apellido)) {
    alert('El nombre y apellido solo deben contener letras y espacios.');
    return;
  }

  if (!phoneRegex.test(telefono)) {
    alert('Por favor, ingrese un número de teléfono válido.');
    return;
  }

  if (!emailRegex.test(correo)) {
    alert('Por favor, ingrese una dirección de correo electrónico válida.');
    return;
  }

  const whatsappNumber = '56973553247';
  const eventoSeleccionado = serviceData[evento]
    ? serviceData[evento].title.replace(/[\uD800-\uDBFF\uDC00-\uDFFF]/g, '').trim()
    : 'No especificado';

  const whatsappMessage = `¡Hola! Soy ${nombre} ${apellido}. Quiero planificar mi evento.

Tipo de evento: ${eventoSeleccionado}
Mensaje: ${mensaje}

Por favor, contáctenme:
Teléfono: ${telefono}
Correo: ${correo}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(whatsappUrl, '_blank');
}

// ========================
// Navegación móvil
// ========================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('icon-hamburger');
  const closeIcon = document.getElementById('icon-close');

  const isClosed = menu.classList.contains('-translate-y-full');

  if (isClosed) {
    menu.classList.remove('-translate-y-full');
    menu.classList.add('translate-y-0');
    document.body.style.overflow = 'hidden';
    hamburger.classList.add('hidden');
    closeIcon.classList.remove('hidden');
  } else {
    menu.classList.add('-translate-y-full');
    menu.classList.remove('translate-y-0');
    document.body.style.overflow = '';
    hamburger.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  }

  menu.classList.toggle('active');
}

// ========================
// Efecto de scroll en navbar
// ========================
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const currentScroll = window.scrollY;

  if (currentScroll > 50) {
    navbar.classList.add("navbar-solid", "shadow-md");
  } else {
    navbar.classList.remove("navbar-solid", "shadow-md");
  }

  /*if (currentScroll > lastScrollTop && currentScroll > 100) {
    navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
  }*/

  lastScrollTop = currentScroll;
});

// ========================
// Inicialización
// ========================
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  populateContactForm();

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', sendToWhatsApp);
  }

  window.addEventListener('resize', initCarousel);
});
