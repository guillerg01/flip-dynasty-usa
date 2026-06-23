import type { Lang } from "./i18n";

export type HomeContent = (typeof HOME)["en"];

export const HOME = {
  en: {
    nav: {
      about: "About",
      products: "Products",
      categories: "Categories",
      process: "Process",
      contact: "Contact",
    },
    requestInfo: "Request Information",
    hero: {
      loc: "Iowa, USA",
      title: "Everyday goods and supply coordination for commercial clients.",
      sub: "Flip Dynasty Holdings LLC sources and supplies practical, everyday consumer goods to local businesses, offices, retailers, distributors, and commercial accounts across the United States — backed by organized purchasing coordination and clear documentation.",
      cta1: "Request Information",
      cta2: "View Categories",
      b1: "Registered Iowa LLC",
      b2: "Business Documentation Available",
      b3: "Commercial Accounts",
    },
    band: {
      eyebrow: "Built for commercial supply",
      caption:
        "Organized sourcing, purchasing coordination, and replenishment support for businesses that depend on dependable everyday supply.",
    },
    about: {
      eyebrow: "Company Profile",
      title:
        "Practical product support for businesses that depend on dependable supply.",
      p1: "Flip Dynasty Holdings LLC is an Iowa-registered B2B supply company that sources and coordinates everyday consumer goods for local businesses, offices, service providers, independent retailers, suppliers, distributors, and commercial accounts across the United States.",
      p2: "We work across general merchandise and everyday categories with a focus on category fit, organized purchasing, accurate records, and reliable long-term business relationships — supporting both one-time orders and recurring replenishment.",
      facts: [
        { k: "Structure", v: "Registered Iowa Limited Liability Company" },
        { k: "Focus", v: "B2B everyday consumer goods & general merchandise" },
        { k: "Clients", v: "Local businesses, offices, retailers & distributors" },
        { k: "Documentation", v: "Business records available when appropriate" },
      ],
    },
    services: {
      eyebrow: "What We Do",
      title: "From one-time orders to ongoing replenishment.",
      items: [
        {
          n: "01",
          title: "Local Business Supply",
          desc: "Practical product support for offices, shops, service providers, independent retailers, and operators managing day-to-day supply needs.",
        },
        {
          n: "02",
          title: "Category Sourcing",
          desc: "Sourcing and reviewing useful consumer goods across home, kitchen, grocery, personal care, tools, family, and pet categories.",
        },
        {
          n: "03",
          title: "Order Coordination",
          desc: "Coordinating quantities, product details, delivery considerations, records, and clear communication for every order.",
        },
        {
          n: "04",
          title: "Replenishment Planning",
          desc: "Supporting repeat product needs, receiving workflows, and replenishment scheduling for established commercial accounts.",
        },
      ],
    },
    categories: {
      eyebrow: "Product Categories",
      title: "Focused categories with practical commercial use.",
      intro:
        "We work with a practical mix of everyday consumer goods for commercial and recurring product needs — selected for category fit and dependable resupply.",
      explore: "Explore category",
    },
    process: {
      eyebrow: "Business Standards",
      title: "Organized, practical, and built for repeat business.",
      items: [
        {
          n: "01",
          title: "Understand",
          desc: "We review the category, product need, buyer type, timing, and expected use case.",
        },
        {
          n: "02",
          title: "Source",
          desc: "We identify practical product options and keep clear records for purchasing decisions.",
        },
        {
          n: "03",
          title: "Coordinate",
          desc: "We coordinate product details, order flow, delivery considerations, and communication.",
        },
        {
          n: "04",
          title: "Support",
          desc: "We support reliable repeat purchasing relationships with clarity and consistency.",
        },
      ],
    },
    stats: [
      { v: "6", l: "Core product categories" },
      { v: "Nationwide", l: "U.S. commercial coverage" },
      { v: "B2B", l: "Business & commercial accounts only" },
      { v: "Available", l: "Business documentation on request" },
    ],
    contact: {
      eyebrow: "Business Supply Inquiries",
      title:
        "A clear contact point for product, supply, and account conversations.",
      intro:
        "Flip Dynasty Holdings LLC welcomes inquiries from small businesses, operators, offices, service providers, specialty retailers, suppliers, distributors, and commercial accounts looking for practical product support.",
      fName: "Name",
      fBusinessName: "Business Name",
      fEmail: "Email",
      fEin: "EIN / Tax ID Number",
      fBizType: "Type of Business",
      fBizTypePlaceholder: "Select one",
      bizTypes: ["Brick & Mortar", "Online Retailer", "Corporate Supply"],
      fSpend: "Estimated Monthly Spend",
      fSpendPlaceholder: "Select a range",
      spendRanges: ["Under $1,000", "$1,000 – $5,000", "$5,000 – $25,000", "$25,000+"],
      fType: "Inquiry Type",
      fTypePlaceholder: "Select one",
      fMessage: "Message",
      send: "Send Message",
      sending: "Sending…",
      note: "Your message will be sent directly to Flip Dynasty Holdings LLC.",
      errorMsg:
        "Something went wrong sending your message. Please try again or email us directly.",
      types: [
        "Business product request",
        "Small business supply",
        "Product sourcing request",
        "Category inquiry",
        "Commercial buying",
        "General business inquiry",
      ],
      successTitle: "Thank you",
      successMsg:
        "Your inquiry has been received. A representative from Flip Dynasty Holdings LLC will follow up with you shortly.",
      backBtn: "Send another message",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Business Hours",
      hoursVal: "Mon–Fri, 9:00 AM – 5:00 PM CT",
      locLabel: "Location",
      bizVal: "Registered Iowa LLC",
    },
    footer: {
      tagline:
        "Consumer goods and business supply coordination from Iowa, USA. B2B and commercial accounts.",
      navHead: "Company",
      legalHead: "Legal & Contact",
      about: "About",
      products: "Products",
      inquiries: "Business Inquiries",
      terms: "Terms",
      privacy: "Privacy",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Nosotros",
      products: "Productos",
      categories: "Categorías",
      process: "Proceso",
      contact: "Contacto",
    },
    requestInfo: "Solicitar Información",
    hero: {
      loc: "Iowa, EE. UU.",
      title:
        "Suministro y coordinación de bienes de uso diario para clientes comerciales.",
      sub: "Flip Dynasty Holdings LLC abastece y suministra bienes de consumo prácticos y de uso diario a negocios locales, oficinas, minoristas, distribuidores y cuentas comerciales en todo Estados Unidos — con coordinación de compras organizada y documentación clara.",
      cta1: "Solicitar Información",
      cta2: "Ver Categorías",
      b1: "LLC Registrada en Iowa",
      b2: "Documentación Comercial Disponible",
      b3: "Cuentas Comerciales",
    },
    band: {
      eyebrow: "Hecho para el suministro comercial",
      caption:
        "Abastecimiento organizado, coordinación de compras y apoyo de reabastecimiento para negocios que dependen de un suministro diario confiable.",
    },
    about: {
      eyebrow: "Perfil de la Empresa",
      title:
        "Apoyo práctico de productos para negocios que dependen de un suministro confiable.",
      p1: "Flip Dynasty Holdings LLC es una empresa de suministro B2B registrada en Iowa que abastece y coordina bienes de consumo de uso diario para negocios locales, oficinas, proveedores de servicios, minoristas independientes, suplidores, distribuidores y cuentas comerciales en todo Estados Unidos.",
      p2: "Trabajamos con mercancía general y categorías de uso diario con enfoque en la idoneidad de categoría, compras organizadas, registros precisos y relaciones comerciales confiables a largo plazo — apoyando tanto pedidos únicos como reabastecimiento recurrente.",
      facts: [
        {
          k: "Estructura",
          v: "Compañía de Responsabilidad Limitada registrada en Iowa",
        },
        { k: "Enfoque", v: "Bienes de consumo B2B de uso diario y mercancía general" },
        { k: "Clientes", v: "Negocios locales, oficinas, minoristas y distribuidores" },
        { k: "Documentación", v: "Registros comerciales disponibles cuando corresponde" },
      ],
    },
    services: {
      eyebrow: "Qué Hacemos",
      title: "De pedidos únicos a reabastecimiento continuo.",
      items: [
        {
          n: "01",
          title: "Suministro a Negocios Locales",
          desc: "Apoyo práctico de productos para oficinas, tiendas, proveedores de servicios, minoristas independientes y operadores que gestionan necesidades diarias de suministro.",
        },
        {
          n: "02",
          title: "Abastecimiento por Categoría",
          desc: "Abastecimiento y revisión de bienes de consumo útiles en hogar, cocina, comestibles, cuidado personal, herramientas, familia y mascotas.",
        },
        {
          n: "03",
          title: "Coordinación de Pedidos",
          desc: "Coordinación de cantidades, detalles de productos, consideraciones de entrega, registros y comunicación clara en cada pedido.",
        },
        {
          n: "04",
          title: "Planificación de Reabastecimiento",
          desc: "Apoyo a necesidades recurrentes de productos, flujos de recepción y programación de reabastecimiento para cuentas comerciales establecidas.",
        },
      ],
    },
    categories: {
      eyebrow: "Categorías de Productos",
      title: "Categorías enfocadas con uso comercial práctico.",
      intro:
        "Trabajamos con una mezcla práctica de bienes de consumo de uso diario para necesidades comerciales y recurrentes — seleccionados por idoneidad de categoría y reabastecimiento confiable.",
      explore: "Explorar categoría",
    },
    process: {
      eyebrow: "Estándares de Negocio",
      title: "Organizado, práctico y diseñado para negocios recurrentes.",
      items: [
        {
          n: "01",
          title: "Entender",
          desc: "Revisamos la categoría, la necesidad del producto, el tipo de comprador, los tiempos y el caso de uso esperado.",
        },
        {
          n: "02",
          title: "Abastecer",
          desc: "Identificamos opciones prácticas de productos y mantenemos registros claros para las decisiones de compra.",
        },
        {
          n: "03",
          title: "Coordinar",
          desc: "Coordinamos detalles de productos, flujo de pedidos, consideraciones de entrega y comunicación.",
        },
        {
          n: "04",
          title: "Apoyar",
          desc: "Apoyamos relaciones de compra recurrentes confiables con claridad y consistencia.",
        },
      ],
    },
    stats: [
      { v: "6", l: "Categorías principales de productos" },
      { v: "Nacional", l: "Cobertura comercial en EE. UU." },
      { v: "B2B", l: "Solo cuentas comerciales y de negocio" },
      { v: "Disponible", l: "Documentación comercial a solicitud" },
    ],
    contact: {
      eyebrow: "Consultas de Suministro Comercial",
      title:
        "Un punto de contacto claro para conversaciones de productos, suministro y cuentas.",
      intro:
        "Flip Dynasty Holdings LLC da la bienvenida a consultas de pequeños negocios, operadores, oficinas, proveedores de servicios, minoristas especializados, suplidores, distribuidores y cuentas comerciales que buscan apoyo práctico de productos.",
      fName: "Nombre",
      fBusinessName: "Nombre del Negocio",
      fEmail: "Correo electrónico",
      fEin: "Número EIN / ID Fiscal",
      fBizType: "Tipo de Negocio",
      fBizTypePlaceholder: "Seleccione uno",
      bizTypes: ["Tienda Física", "Minorista en Línea", "Suministro Corporativo"],
      fSpend: "Presupuesto Mensual Estimado",
      fSpendPlaceholder: "Seleccione un rango",
      spendRanges: ["Menos de $1,000", "$1,000 – $5,000", "$5,000 – $25,000", "Más de $25,000"],
      fType: "Tipo de Consulta",
      fTypePlaceholder: "Seleccione una",
      fMessage: "Mensaje",
      send: "Enviar Mensaje",
      sending: "Enviando…",
      note: "Su mensaje se enviará directamente a Flip Dynasty Holdings LLC.",
      errorMsg:
        "Ocurrió un problema al enviar su mensaje. Inténtelo de nuevo o escríbanos directamente.",
      types: [
        "Solicitud de producto comercial",
        "Suministro para pequeño negocio",
        "Solicitud de abastecimiento",
        "Consulta de categoría",
        "Compra comercial",
        "Consulta general",
      ],
      successTitle: "Gracias",
      successMsg:
        "Hemos recibido su consulta. Un representante de Flip Dynasty Holdings LLC se comunicará con usted en breve.",
      backBtn: "Enviar otro mensaje",
      phoneLabel: "Teléfono",
      emailLabel: "Correo",
      hoursLabel: "Horario de Atención",
      hoursVal: "Lun–Vie, 9:00 – 17:00 CT",
      locLabel: "Ubicación",
      bizVal: "LLC Registrada en Iowa",
    },
    footer: {
      tagline:
        "Coordinación de bienes de consumo y suministro comercial desde Iowa, EE. UU. Cuentas B2B y comerciales.",
      navHead: "Empresa",
      legalHead: "Legal y Contacto",
      about: "Nosotros",
      products: "Productos",
      inquiries: "Consultas Comerciales",
      terms: "Términos",
      privacy: "Privacidad",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

export const PHONE = "+1 (641) 799-3953";
export const PHONE_HREF = "tel:+16417993953";
export const EMAIL = "info@flipdynastyusa.com";
export const ADDRESS = {
  name: "Flip Dynasty Holdings LLC",
  line1: "510 E Main St, Rear Unit",
  line2: "Ottumwa, IA 52501",
} as const;

export function home(lang: Lang) {
  return HOME[lang];
}
