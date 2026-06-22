import type { Lang } from "./i18n";

export const ORDER = [
  "home-kitchen",
  "toys-family",
  "tools-hardware",
  "beauty-personal-care",
  "grocery-pantry",
  "pet-supplies",
] as const;

export type CategorySlug = (typeof ORDER)[number];

type Glance = { k: string; v: string };
type Group = { name: string; desc: string };

type CatLang = {
  name: string;
  cardDesc: string;
  cardSub: string;
  tagline: string;
  overTitle: string;
  intro: string;
  audience: string;
  glance: Glance[];
  groups: Group[];
};

type CatEntry = {
  cardImg: string;
  heroImg: string;
  en: CatLang;
  es: CatLang;
};

const U = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const CATS: Record<CategorySlug, CatEntry> = {
  "home-kitchen": {
    cardImg: U("photo-1556909114-f6e7ad7d3136", 900),
    heroImg: U("photo-1556909114-f6e7ad7d3136", 1600),
    en: {
      name: "Home & Kitchen",
      cardDesc: "Home, kitchen, storage, cleaning, and routine-use commercial goods.",
      cardSub: "Useful for offices, service providers, and independent retailers.",
      tagline: "Everyday home, kitchen, and routine-use goods for offices, shops, and independent retailers.",
      overTitle: "Practical home and kitchen goods for commercial resupply.",
      intro: "Home and kitchen is one of our most consistent everyday categories — covering routine-use goods that businesses reorder regularly, from cookware and storage to cleaning and organization.",
      audience: "We support offices, service providers, hospitality-style operations, and independent retailers that need dependable, category-fit products and clear order coordination.",
      glance: [
        { k: "Use", v: "Routine & high-turnover" },
        { k: "Buyers", v: "Offices, shops, retailers" },
        { k: "Orders", v: "One-time or recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Cookware & Utensils", desc: "Everyday cooking and prep essentials for routine commercial use." },
        { name: "Food Storage & Containers", desc: "Storage, containers, and organization for shelves and back-of-house." },
        { name: "Cleaning Supplies", desc: "Routine-use cleaning and maintenance goods for daily operations." },
        { name: "Small Kitchen Goods", desc: "Practical small wares and accessories for kitchens and breakrooms." },
        { name: "Tableware & Serving", desc: "Tableware, servingware, and disposables for recurring demand." },
        { name: "Organization & Shelving", desc: "Bins, racks, and organization for tidy, efficient storage." },
      ],
    },
    es: {
      name: "Hogar y Cocina",
      cardDesc: "Bienes de hogar, cocina, almacenamiento, limpieza y uso rutinario para comercios.",
      cardSub: "Útiles para oficinas, proveedores de servicios y minoristas independientes.",
      tagline: "Bienes de hogar, cocina y uso rutinario para oficinas, tiendas y minoristas independientes.",
      overTitle: "Bienes prácticos de hogar y cocina para reabastecimiento comercial.",
      intro: "Hogar y cocina es una de nuestras categorías más constantes — abarca bienes de uso rutinario que los negocios reordenan con frecuencia, desde utensilios y almacenamiento hasta limpieza y organización.",
      audience: "Apoyamos oficinas, proveedores de servicios, operaciones tipo hospitalidad y minoristas independientes que necesitan productos confiables y coordinación de pedidos clara.",
      glance: [
        { k: "Uso", v: "Rutinario y de alta rotación" },
        { k: "Compradores", v: "Oficinas, tiendas, minoristas" },
        { k: "Pedidos", v: "Únicos o recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Utensilios de Cocina", desc: "Esenciales diarios de cocina y preparación para uso comercial rutinario." },
        { name: "Almacenamiento de Alimentos", desc: "Almacenamiento, contenedores y organización para estantes y trastienda." },
        { name: "Productos de Limpieza", desc: "Bienes de limpieza y mantenimiento de uso rutinario para operaciones diarias." },
        { name: "Artículos Pequeños de Cocina", desc: "Pequeños artículos y accesorios prácticos para cocinas y comedores." },
        { name: "Vajilla y Servicio", desc: "Vajilla, artículos de servicio y desechables para demanda recurrente." },
        { name: "Organización y Estantería", desc: "Cajas, racks y organización para un almacenamiento ordenado y eficiente." },
      ],
    },
  },
  "toys-family": {
    cardImg: U("photo-1515488042361-ee00e0ddd4e4", 900),
    heroImg: U("photo-1515488042361-ee00e0ddd4e4", 1600),
    en: {
      name: "Toys & Family Goods",
      cardDesc: "Family goods, activities, seasonal products, and giftable categories.",
      cardSub: "Flexible support for specialty retailers and seasonal demand.",
      tagline: "Family goods, activities, seasonal products, and giftable categories for specialty retailers.",
      overTitle: "Flexible family and seasonal goods for rotating demand.",
      intro: "Toys and family goods cover a flexible mix of activity, seasonal, and giftable products that specialty retailers and operators rotate throughout the year.",
      audience: "We support specialty retailers, seasonal buyers, and operators managing changing demand with practical sourcing and order coordination.",
      glance: [
        { k: "Use", v: "Seasonal & rotating" },
        { k: "Buyers", v: "Specialty retailers" },
        { k: "Orders", v: "One-time or recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Activity & Play Sets", desc: "Hands-on activity and play products across age ranges." },
        { name: "Seasonal & Giftable", desc: "Seasonal items and giftable goods for rotating demand." },
        { name: "Educational Toys", desc: "Learning-focused products for retail and family settings." },
        { name: "Family Games", desc: "Games and group activities for shelves and gifting." },
        { name: "Outdoor & Active Play", desc: "Active and outdoor play goods for seasonal needs." },
        { name: "Party & Celebration", desc: "Party supplies and celebration goods for recurring events." },
      ],
    },
    es: {
      name: "Juguetes y Artículos Familiares",
      cardDesc: "Artículos familiares, actividades, productos de temporada y categorías para regalo.",
      cardSub: "Apoyo flexible para minoristas especializados y demanda de temporada.",
      tagline: "Artículos familiares, actividades, productos de temporada y categorías para regalo para minoristas especializados.",
      overTitle: "Bienes familiares y de temporada flexibles para demanda rotativa.",
      intro: "Juguetes y artículos familiares abarcan una mezcla flexible de productos de actividad, temporada y regalo que los minoristas especializados rotan durante el año.",
      audience: "Apoyamos minoristas especializados, compradores de temporada y operadores que gestionan demanda cambiante con abastecimiento práctico y coordinación de pedidos.",
      glance: [
        { k: "Uso", v: "De temporada y rotativo" },
        { k: "Compradores", v: "Minoristas especializados" },
        { k: "Pedidos", v: "Únicos o recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Sets de Actividad y Juego", desc: "Productos de actividad y juego para distintas edades." },
        { name: "Temporada y Regalo", desc: "Artículos de temporada y para regalo para demanda rotativa." },
        { name: "Juguetes Educativos", desc: "Productos de aprendizaje para venta minorista y el hogar." },
        { name: "Juegos Familiares", desc: "Juegos y actividades grupales para estantes y regalo." },
        { name: "Juego Activo y Exterior", desc: "Bienes de juego activo y exterior para necesidades de temporada." },
        { name: "Fiesta y Celebración", desc: "Suministros de fiesta y celebración para eventos recurrentes." },
      ],
    },
  },
  "tools-hardware": {
    cardImg: U("photo-1530124566582-a618bc2615dc", 900),
    heroImg: U("photo-1530124566582-a618bc2615dc", 1600),
    en: {
      name: "Tools & Hardware",
      cardDesc: "Small tools, hardware, garage supplies, and utility accessories.",
      cardSub: "For service providers, maintenance needs, shops, and operators.",
      tagline: "Small tools, hardware, garage supplies, and utility accessories for service providers and shops.",
      overTitle: "Dependable tools and hardware for working operations.",
      intro: "Tools and hardware support the practical, working needs of service providers, maintenance teams, and shops — small tools, fasteners, and utility accessories kept on hand.",
      audience: "We support service providers, maintenance needs, shops, and operators with steady access to working supplies and clear resupply coordination.",
      glance: [
        { k: "Use", v: "Working & maintenance" },
        { k: "Buyers", v: "Shops, service providers" },
        { k: "Orders", v: "One-time or recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Hand Tools", desc: "Everyday hand tools for working and maintenance needs." },
        { name: "Fasteners & Hardware", desc: "Fasteners, fittings, and general hardware supplies." },
        { name: "Garage & Storage", desc: "Garage, workspace, and storage support products." },
        { name: "Measuring & Layout", desc: "Measuring, marking, and layout essentials." },
        { name: "Safety & Workwear", desc: "Practical safety items and workwear basics." },
        { name: "Vehicle Utility", desc: "Utility and vehicle-adjacent accessories for operators." },
      ],
    },
    es: {
      name: "Herramientas y Ferretería",
      cardDesc: "Herramientas pequeñas, ferretería, suministros de garaje y accesorios de utilidad.",
      cardSub: "Para proveedores de servicios, mantenimiento, tiendas y operadores.",
      tagline: "Herramientas pequeñas, ferretería, suministros de garaje y accesorios de utilidad para proveedores y tiendas.",
      overTitle: "Herramientas y ferretería confiables para operaciones de trabajo.",
      intro: "Herramientas y ferretería apoyan las necesidades prácticas de proveedores de servicios, equipos de mantenimiento y tiendas — herramientas pequeñas, sujetadores y accesorios de utilidad a la mano.",
      audience: "Apoyamos proveedores de servicios, necesidades de mantenimiento, tiendas y operadores con acceso constante a suministros de trabajo y coordinación de reabastecimiento clara.",
      glance: [
        { k: "Uso", v: "Trabajo y mantenimiento" },
        { k: "Compradores", v: "Tiendas, proveedores" },
        { k: "Pedidos", v: "Únicos o recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Herramientas de Mano", desc: "Herramientas de mano diarias para trabajo y mantenimiento." },
        { name: "Sujetadores y Ferretería", desc: "Sujetadores, accesorios y suministros generales de ferretería." },
        { name: "Garaje y Almacenamiento", desc: "Productos de apoyo para garaje, taller y almacenamiento." },
        { name: "Medición y Trazado", desc: "Esenciales de medición, marcado y trazado." },
        { name: "Seguridad y Ropa de Trabajo", desc: "Artículos prácticos de seguridad y ropa de trabajo básica." },
        { name: "Utilidad Vehicular", desc: "Accesorios de utilidad y vehiculares para operadores." },
      ],
    },
  },
  "beauty-personal-care": {
    cardImg: U("photo-1556228578-8c89e6adf883", 900),
    heroImg: U("photo-1556228578-8c89e6adf883", 1600),
    en: {
      name: "Beauty & Personal Care",
      cardDesc: "Routine-use personal care, grooming, and self-care categories.",
      cardSub: "Practical products for specialty buyers and recurring needs.",
      tagline: "Routine-use personal care, grooming, and self-care categories for specialty buyers.",
      overTitle: "Routine personal care goods for recurring demand.",
      intro: "Beauty and personal care covers routine-use grooming, hair, skin, and self-care products that move steadily for specialty buyers and recurring commercial needs.",
      audience: "We support specialty retailers, care settings, and operators with practical product fit and dependable resupply coordination.",
      glance: [
        { k: "Use", v: "Routine & repeat-use" },
        { k: "Buyers", v: "Specialty & care settings" },
        { k: "Orders", v: "One-time or recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Grooming Essentials", desc: "Everyday grooming products for routine demand." },
        { name: "Hair Care", desc: "Hair care and styling basics for recurring needs." },
        { name: "Skin & Body Care", desc: "Skin and body care for daily-use categories." },
        { name: "Personal Accessories", desc: "Practical personal accessories and care tools." },
        { name: "Oral Care", desc: "Routine oral care products for steady resupply." },
        { name: "Daily Self-Care", desc: "Self-care items for repeat-use commercial demand." },
      ],
    },
    es: {
      name: "Belleza y Cuidado Personal",
      cardDesc: "Cuidado personal de uso rutinario, aseo y categorías de cuidado propio.",
      cardSub: "Productos prácticos para compradores especializados y necesidades recurrentes.",
      tagline: "Cuidado personal de uso rutinario, aseo y categorías de cuidado propio para compradores especializados.",
      overTitle: "Bienes de cuidado personal de rutina para demanda recurrente.",
      intro: "Belleza y cuidado personal abarca productos de aseo, cabello, piel y cuidado propio de uso rutinario que se mueven de forma constante para compradores especializados y necesidades comerciales recurrentes.",
      audience: "Apoyamos minoristas especializados, centros de cuidado y operadores con idoneidad práctica de productos y coordinación de reabastecimiento confiable.",
      glance: [
        { k: "Uso", v: "Rutinario y repetitivo" },
        { k: "Compradores", v: "Especializados y de cuidado" },
        { k: "Pedidos", v: "Únicos o recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Esenciales de Aseo", desc: "Productos de aseo diarios para demanda rutinaria." },
        { name: "Cuidado del Cabello", desc: "Cuidado del cabello y peinado básico para necesidades recurrentes." },
        { name: "Cuidado de Piel y Cuerpo", desc: "Cuidado de piel y cuerpo para categorías de uso diario." },
        { name: "Accesorios Personales", desc: "Accesorios personales prácticos y herramientas de cuidado." },
        { name: "Cuidado Oral", desc: "Productos de cuidado oral rutinario para reabastecimiento constante." },
        { name: "Cuidado Propio Diario", desc: "Artículos de cuidado propio para demanda comercial repetitiva." },
      ],
    },
  },
  "grocery-pantry": {
    cardImg: U("photo-1604719312566-8912e9227c6a", 900),
    heroImg: U("photo-1604719312566-8912e9227c6a", 1600),
    en: {
      name: "Grocery & Pantry",
      cardDesc: "Shelf-stable grocery, snacks, beverages, and pantry replenishment items.",
      cardSub: "For breakroom needs and routine commercial demand.",
      tagline: "Shelf-stable grocery, snacks, beverages, and pantry replenishment items for routine demand.",
      overTitle: "Shelf-stable grocery and pantry goods for steady resupply.",
      intro: "Grocery and pantry covers shelf-stable goods, snacks, beverages, and breakroom essentials that businesses replenish on a routine schedule.",
      audience: "We support breakroom needs, offices, and operators with routine food-category purchasing and dependable replenishment coordination.",
      glance: [
        { k: "Use", v: "Shelf-stable & routine" },
        { k: "Buyers", v: "Offices, breakrooms" },
        { k: "Orders", v: "Mostly recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Pantry Goods", desc: "Shelf-stable pantry staples for routine resupply." },
        { name: "Snacks & Confectionery", desc: "Snacks and confectionery for breakroom and retail demand." },
        { name: "Beverages", desc: "Shelf-stable beverages for steady commercial needs." },
        { name: "Cooking Staples", desc: "Cooking staples and seasonings for everyday use." },
        { name: "Breakroom Supplies", desc: "Breakroom and office food-adjacent supplies." },
        { name: "Packaged Foods", desc: "Packaged food goods for recurring demand." },
      ],
    },
    es: {
      name: "Comestibles y Despensa",
      cardDesc: "Comestibles no perecederos, snacks, bebidas y artículos de reabastecimiento de despensa.",
      cardSub: "Para necesidades de comedor y demanda comercial rutinaria.",
      tagline: "Comestibles no perecederos, snacks, bebidas y artículos de despensa para demanda rutinaria.",
      overTitle: "Comestibles y despensa no perecederos para reabastecimiento constante.",
      intro: "Comestibles y despensa abarca bienes no perecederos, snacks, bebidas y esenciales de comedor que los negocios reabastecen en un horario rutinario.",
      audience: "Apoyamos necesidades de comedor, oficinas y operadores con compras rutinarias de categoría alimentaria y coordinación de reabastecimiento confiable.",
      glance: [
        { k: "Uso", v: "No perecedero y rutinario" },
        { k: "Compradores", v: "Oficinas, comedores" },
        { k: "Pedidos", v: "Mayormente recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Bienes de Despensa", desc: "Básicos de despensa no perecederos para reabastecimiento rutinario." },
        { name: "Snacks y Confitería", desc: "Snacks y confitería para demanda de comedor y minorista." },
        { name: "Bebidas", desc: "Bebidas no perecederas para necesidades comerciales constantes." },
        { name: "Básicos de Cocina", desc: "Básicos de cocina y condimentos para uso diario." },
        { name: "Suministros de Comedor", desc: "Suministros de comedor y afines a alimentos de oficina." },
        { name: "Alimentos Empacados", desc: "Bienes alimentarios empacados para demanda recurrente." },
      ],
    },
  },
  "pet-supplies": {
    cardImg: U("photo-1601758228041-f3b2795255f1", 900),
    heroImg: U("photo-1601758228041-f3b2795255f1", 1600),
    en: {
      name: "Pet Supplies",
      cardDesc: "Pet food, treats, care items, accessories, and everyday pet products.",
      cardSub: "For pet retail, care settings, and repeat-use supplies.",
      tagline: "Pet food, treats, care items, accessories, and everyday pet products for pet retail and care.",
      overTitle: "Everyday pet products for retail and care settings.",
      intro: "Pet supplies cover food, treats, care items, and accessories that pet retailers and care settings reorder on a steady, repeat-use basis.",
      audience: "We support pet retail, care settings, and operators with practical product fit and dependable resupply coordination.",
      glance: [
        { k: "Use", v: "Repeat-use & routine" },
        { k: "Buyers", v: "Pet retail & care" },
        { k: "Orders", v: "One-time or recurring" },
        { k: "Records", v: "Available on request" },
      ],
      groups: [
        { name: "Pet Food", desc: "Everyday pet food for steady, repeat-use demand." },
        { name: "Treats & Chews", desc: "Treats and chews for retail and care settings." },
        { name: "Toys & Enrichment", desc: "Play and enrichment products for pets." },
        { name: "Grooming & Care", desc: "Grooming and routine care items for pets." },
        { name: "Bowls & Accessories", desc: "Bowls, accessories, and everyday pet gear." },
        { name: "Cleanup & Hygiene", desc: "Cleanup and hygiene supplies for pet settings." },
      ],
    },
    es: {
      name: "Artículos para Mascotas",
      cardDesc: "Alimento, premios, artículos de cuidado, accesorios y productos diarios para mascotas.",
      cardSub: "Para venta minorista de mascotas, centros de cuidado y suministros recurrentes.",
      tagline: "Alimento, premios, artículos de cuidado, accesorios y productos diarios para mascotas para venta y cuidado.",
      overTitle: "Productos diarios para mascotas para venta y centros de cuidado.",
      intro: "Artículos para mascotas abarcan alimento, premios, artículos de cuidado y accesorios que los minoristas y centros de cuidado reordenan de forma constante y repetitiva.",
      audience: "Apoyamos venta minorista de mascotas, centros de cuidado y operadores con idoneidad práctica de productos y coordinación de reabastecimiento confiable.",
      glance: [
        { k: "Uso", v: "Repetitivo y rutinario" },
        { k: "Compradores", v: "Venta y cuidado de mascotas" },
        { k: "Pedidos", v: "Únicos o recurrentes" },
        { k: "Registros", v: "Disponibles a solicitud" },
      ],
      groups: [
        { name: "Alimento para Mascotas", desc: "Alimento diario para mascotas para demanda constante y repetitiva." },
        { name: "Premios y Masticables", desc: "Premios y masticables para venta y centros de cuidado." },
        { name: "Juguetes y Enriquecimiento", desc: "Productos de juego y enriquecimiento para mascotas." },
        { name: "Aseo y Cuidado", desc: "Artículos de aseo y cuidado rutinario para mascotas." },
        { name: "Tazones y Accesorios", desc: "Tazones, accesorios y artículos diarios para mascotas." },
        { name: "Limpieza e Higiene", desc: "Suministros de limpieza e higiene para entornos con mascotas." },
      ],
    },
  },
};

export const CATUI = {
  en: {
    crumbHome: "Home",
    crumbCats: "Categories",
    catEyebrow: "Product Category",
    overviewEyebrow: "Overview",
    atAGlance: "At a glance",
    groupsEyebrow: "What We Supply",
    groupsTitle: "Typical product groups in this category.",
    otherTitle: "Other categories",
    ctaTitle: "Request information on this category.",
    ctaSub: "Tell us what your business needs and we will coordinate sourcing, quantities, and resupply for your commercial account.",
  },
  es: {
    crumbHome: "Inicio",
    crumbCats: "Categorías",
    catEyebrow: "Categoría de Producto",
    overviewEyebrow: "Resumen",
    atAGlance: "Resumen rápido",
    groupsEyebrow: "Qué Suministramos",
    groupsTitle: "Grupos de productos típicos en esta categoría.",
    otherTitle: "Otras categorías",
    ctaTitle: "Solicite información sobre esta categoría.",
    ctaSub: "Cuéntenos qué necesita su negocio y coordinaremos el abastecimiento, las cantidades y el reabastecimiento para su cuenta comercial.",
  },
} as const;

export function isCategory(slug: string): slug is CategorySlug {
  return (ORDER as readonly string[]).includes(slug);
}

export function categoryCard(slug: CategorySlug, lang: Lang) {
  const c = CATS[slug];
  return { slug, img: c.cardImg, ...c[lang] };
}
