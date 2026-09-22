import freelancewebMockup from "../assets/mockup-freelanceweb.png";
import golDeCompraMockup from "../assets/mockup-gol-de-compra.png"
import catalogoSuprote from "../assets/mockup-catalogo-suprote.png"

export const projects = [
  {
    id: 1,
    name: "FreelanceWeb;",
    image: freelancewebMockup,
    status: "Featured",
    description: "Página web sencilla de venta de páginas web. Internacionalización (español e inglés) y google calendar integrado para agendar citas.",
    tools: ["Astro", "Tailwindcss 4", "TypeScript"],
    github: "https://github.com/crontreras1dev/freelanceweb",
    page: "https://freelanceweb.work"
  },
  {
    id: 2,
    name: "Gol de compra",
    image: golDeCompraMockup,
    status: "Featured",
    description: "Funel tipo crashing. Página web sencilla de venta de un e-book.",
    tools: ["React", "Tailwindcss 4"],
    github: "https://github.com/crontreras1dev/gol-de-compra",
    page: "https://gol-de-compra.vercel.app/"
  },
  {
    id: 3,
    name: "Catálogo Suprote",
    image: catalogoSuprote,
    status: "Featured",
    description: "Catálogo de suplementación deportiva con filtro por categoría",
    tools: ["React", "Tailwindcss 3", "TypeScript"],
    github: "https://github.com/crontreras1dev/catalogo-suprote",
    page: "https://catalogo-suprote-jreut5ahy-crontreras1s-projects.vercel.app/"
  },
];