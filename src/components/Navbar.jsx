import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const NAV_LINKS = [
  { id: "projects", key: "nav.projects" },
  { id: "skills", key: "nav.skills" },
  { id: "experience", key: "nav.experience" },
  { id: "contact", key: "nav.contact" },
];

const LANGUAGES = [
  { code: "en", label: "EN", key: "nav.switchToEn" },
  { code: "es", label: "ES", key: "nav.switchToEs" },
];

const LanguageToggle = () => {
  const { lang, t, setLanguage } = useLanguage();

  return (
    <div role="group" aria-label={ t("nav.languageLabel") } className="flex items-center gap-2 text-sm md:text-base">
      {
        LANGUAGES.map((language, index) => (
          <span key={ language.code } className="flex items-center gap-2">
            { index > 0 && <span aria-hidden="true" className="text-text-secondary">|</span> }

            <button
              type="button"
              onClick={ () => setLanguage(language.code) }
              aria-label={ t(language.key) }
              aria-pressed={ lang === language.code }
              className={ `cursor-pointer transition-colors ${ lang === language.code ? "text-text" : "text-text-secondary hover:text-text" }` }
            >
              { language.label }
            </button>
          </span>
        ))
      }
    </div>
  );
};

const MenuIcon = ({ open }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-6 h-6" aria-hidden="true">
    {
      open
        ? <path d="M6 6l12 12M18 6L6 18" />
        : <path d="M4 7h16M4 12h16M4 17h16" />
    }
  </svg>
);

const Navbar = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setIsOpen(false);
    };

    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const handleBreakpoint = (event) => {
      if (event.matches) setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleClickOutside);
    desktopQuery.addEventListener("change", handleBreakpoint);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleClickOutside);
      desktopQuery.removeEventListener("change", handleBreakpoint);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const renderLinks = (onNavigate) =>
    NAV_LINKS.map(link => (
      <li key={ link.id }>
        <a
          href={ `#${ link.id }` }
          onClick={ onNavigate }
          className="block text-text-secondary hover:text-text transition-colors"
        >
          { t(link.key) }
        </a>
      </li>
    ));

  return (
    <header ref={ headerRef } className="sticky top-0 z-50 -mx-5 -mt-5 px-5 bg-bg/80 backdrop-blur border-b border-border/50">
      <nav aria-label={ t("nav.mainLabel") } className="relative flex justify-end items-center py-4">
        <button
          type="button"
          onClick={ () => setIsOpen(open => !open) }
          aria-label={ isOpen ? t("nav.closeMenu") : t("nav.openMenu") }
          aria-expanded={ isOpen }
          aria-controls="mobile-menu"
          className="md:hidden p-1 text-text cursor-pointer"
        >
          <MenuIcon open={ isOpen } />
        </button>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-base">
            { renderLinks() }
          </ul>

          <LanguageToggle />
        </div>
      </nav>

      {
        isOpen && (
          <div id="mobile-menu" className="md:hidden -mx-5 px-5 pb-5 bg-bg border-b border-border">
            <ul className="flex flex-col gap-4 pt-2 text-base">
              { renderLinks(closeMenu) }
            </ul>

            <div className="mt-5 pt-4 border-t border-border">
              <LanguageToggle />
            </div>
          </div>
        )
      }
    </header>
  );
};

export default Navbar;
