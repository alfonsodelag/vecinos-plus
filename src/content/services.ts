export type Service = {
  title: string;
  slug: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Mudanzas residenciales",
    slug: "mudanzas-residenciales",
    description:
      "Te ayudamos a mover tus cosas de una casa a otra con una coordinación clara, trato cercano y apoyo durante todo el proceso.",
    image: "/images/services/mudanzas-residenciales.jpg",
    featured: true,
  },
  {
    title: "Mudanzas en apartamentos y P.H.",
    slug: "mudanzas-apartamento-ph",
    description:
      "Sabemos que una mudanza en edificio requiere orden: horarios, elevadores, permisos, estacionamiento y coordinación. Te ayudamos a que todo fluya mejor.",
    image: "/images/services/mudanzas-apartamento-ph.jpg",
    featured: true,
  },
  {
    title: "Mudanzas de oficina",
    slug: "mudanzas-oficina",
    description:
      "Movemos equipos, mobiliario y artículos de trabajo para que tu negocio pueda reubicarse de forma más organizada.",
    image: "/images/services/mudanzas-oficina.jpg",
    featured: true,
  },
  {
    title: "Reubicaciones",
    slug: "reubicaciones",
    description:
      "Para cambios de casa, apartamento o espacio de trabajo, te acompañamos en el proceso de mover lo importante de un punto a otro.",
    image: "/images/services/reubicaciones.jpg",
  },
  {
    title: "Envíos y logística local",
    slug: "envios-logistica-local",
    description:
      "Apoyo para transportar artículos, paquetes o cargas puntuales dentro del área de cobertura, según disponibilidad.",
    image: "/images/services/envios-logistica-local.jpg",
    featured: true,
  },
  {
    title: "Acarreos",
    slug: "acarreos",
    description:
      "Para esas vueltas que no necesitan una mudanza completa, pero sí alguien que resuelva el transporte.",
    image: "/images/services/acarreos.jpg",
  },
  {
    title: "Transporte de artículos personales",
    slug: "transporte-articulos-personales",
    description:
      "Movemos objetos, cajas, maletas, muebles u otros artículos según evaluación y disponibilidad.",
    image: "/images/services/transporte-articulos-personales.jpg",
  },
  {
    title: "Vueltas puntuales",
    slug: "vueltas-puntuales",
    description:
      "¿Compraste algo, necesitas llevar algo o resolver un traslado rápido? Cuéntanos qué necesitas mover y lo revisamos.",
    image: "/images/services/vueltas-puntuales.jpg",
  },
];

export const featuredServices = services.filter((s) => s.featured);
