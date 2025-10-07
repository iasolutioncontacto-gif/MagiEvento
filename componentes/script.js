
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
              'componentes/img/servicios/Bautizos/1.jpeg',
              'componentes/img/servicios/Bautizos/2.jpg',
              'componentes/img/servicios/Bautizos/3.png',
              'componentes/img/servicios/Bautizos/4.jpg'
            ],
            'Matrimonios': [
                'componentes/img/servicios/Matrimonios/1.png',
                'componentes/img/servicios/Matrimonios/2.jpg',
                'componentes/img/servicios/Matrimonios/3.jpg',
                'componentes/img/servicios/Matrimonios/4.jpg',

            ],
            'Cumpleanos': [
                'componentes/img/servicios/Cumpleaños/1.png',
                'componentes/img/servicios/Cumpleaños/2.png',
                'componentes/img/servicios/Cumpleaños/3.png',
            ],
            'Corporativos': [
                'componentes/img/servicios/Corporativos/1.png',
                'componentes/img/servicios/Corporativos/2.png',
                'componentes/img/servicios/Corporativos/3.jpg'
            ],
            
            'Aniversarios': [
                'componentes/img/servicios/Aniversarios/1.jpg',
                'componentes/img/servicios/Aniversarios/2.jpg',
                'componentes/img/servicios/Aniversarios/3.png',
            ],
            'Graduaciones': [
                'componentes/img/servicios/Graduaciones/1.png',
                'componentes/img/servicios/Graduaciones/2.png',
                'componentes/img/servicios/Graduaciones/3.png'
            ],
            'Celebraciones': [
                'componentes/img/servicios/Celebraciones/1.png',
                'componentes/img/servicios/Celebraciones/2.png',
                'componentes/img/servicios/Celebraciones/3.png'
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
