import { useLanguage } from "../i18n/LanguageContext";

const NAV_LINKS = [
  { id: "projects", key: "nav.projects" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "contact", key: "nav.contact" },
];

const Navbar = () => {
  const { lang, t, toggleLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 -mx-5 -mt-5 px-5 bg-bg/80 backdrop-blur border-b border-border/50">
      <nav aria-label={ t("nav.mainLabel") } className="flex flex-wrap justify-between items-center gap-y-2 py-4">
        <a href="#top" className="text-3xl font-bold text-text-secondary">Cr1</a>

        <ul className="order-last md:order-none w-full md:w-auto flex justify-center md:justify-end gap-5 md:gap-8 text-sm md:text-base">
          {
            NAV_LINKS.map(link => (
              <li key={ link.id }>
                <a href={ `#${ link.id }` } className="text-text-secondary hover:text-text transition-colors">
                  { t(link.key) }
                </a>
              </li>
            ))
          }
        </ul>

        <button
          type="button"
          onClick={ toggleLanguage }
          aria-label={ t("nav.toggleLabel") }
          className="flex items-center gap-1 px-3 py-1 text-sm border border-border rounded-lg bg-button-bg/40 hover:bg-button-bg transition-colors cursor-pointer"
        >
          <span className={ lang === "en" ? "text-text font-bold" : "text-text-secondary" }>EN</span>
          <span className="text-text-secondary">|</span>
          <span className={ lang === "es" ? "text-text font-bold" : "text-text-secondary" }>ES</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
