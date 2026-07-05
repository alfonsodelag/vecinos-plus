export const siteConfig = {
  businessName: "Vecinos Plus",
  shortName: "Vecinos Plus",
  tagline: "Mudanzas, acarreos y logística local en Panamá, sin drama.",
  description:
    "Vecinos Plus te ayuda con mudanzas, reubicaciones, envíos y acarreos en Panamá con un trato cercano, práctico y sin enredo.",
  url: "https://vecinos-plus.vercel.app",
  whatsapp: "50767804453",
  whatsappDisplay: "6780-4453",
  email: "Gerencia.logisticanavarro@gmail.com",
  address: "PH 240, Parque Lefevre, Ciudad de Panamá",
  coverageArea: "Todo el país, de Panamá al interior",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=PH+240+Parque+Lefevre+Panama",
  mapsEmbedUrl: "https://www.google.com/maps?q=PH+240+Parque+Lefevre+Panam%C3%A1&output=embed",
  appointmentNote: "Cotiza tu mudanza y coordinamos contigo.",
  hours: {
    weekdays: "Lun – Vie: 8:00 a.m. – 6:00 p.m.",
    saturday: "Sáb: 8:00 a.m. – 3:00 p.m.",
    sunday: "",
    emergency: ""
  },
  social: {
    instagram: "https://www.instagram.com/vecinosplus/",
    facebook: "",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "Vecinos Plus | Mudanzas, Acarreos y Logística en Panamá",
    description:
      "Vecinos Plus ofrece servicios de mudanzas, reubicaciones, acarreos, envíos y logística local en Panamá con trato cercano, práctico y sin enredo.",
    keywords: [
      "mudanzas en Panamá",
      "empresa de mudanzas en Panamá",
      "mudanza apartamento Panamá",
      "mudanza PH Panamá",
      "acarreo Panamá",
      "envíos Panamá",
      "logística local Panamá",
      "reubicaciones Panamá",
      "transporte de muebles Panamá",
      "Vecinos Plus",
      "Vecinos Plus Panamá"
    ]
  },
  colors: {
    primary: "#01267E",
    primaryDark: "#001A57",
    primaryDeep: "#000F33",
    primarySoft: "#E7ECF8",
    secondary: "#F47A0E",
    secondaryDark: "#D9660A",
    secondaryDeep: "#B8540A",
    secondarySoft: "#FFF1E2",
    accent: "#FE2400",
    background: "#F7F8FA",
    surface: "#FFFFFF",
    surfaceSoft: "#EAF0FB",
    text: "#01267E",
    textMuted: "#54607D",
    border: "#D7E1F2",
    white: "#FFFFFF"
  }
} as const;

export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}`
  : siteConfig.social.instagram;

export function whatsappUrlFor(service?: string): string {
  if (!siteConfig.whatsapp) return siteConfig.social.instagram;
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  const message = `Hola Vecinos Plus, quiero cotizar una mudanza.${
    service ? ` Me interesa: ${service}.` : ""
  }`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
