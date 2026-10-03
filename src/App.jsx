import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import GitHub from "./assets/icons/github.svg";
import LinkedIn from "./assets/icons/linkedin.svg";
import { useLanguage } from "./i18n/LanguageContext";
import { EMAIL, sendEmail } from "./utils/email";

function App() {
  const { t } = useLanguage();

  const handleSendEmail = () => sendEmail(t);

  return (
    <>
      <Navbar />

      <main id="top">
        <Hero />

        <Projects />

        <Skills />

        <Experience />

        <Contact email={ EMAIL } onContact={ handleSendEmail } />
      </main>

      <footer className="border-t border-border my-5 py-5">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="flex justify-center items-center py-5">
            <ul className="flex gap-4">
              <li>
                <a href="https://github.com/crontreras1dev" target="_blank" rel="noopener noreferrer">
                  <img src={ GitHub } alt="GitHub" className="w-6 h-6" />
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/crontreras1dev/" target="_blank" rel="noopener noreferrer">
                  <img src={ LinkedIn } alt="LinkedIn" className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>

          <p className="text-sm text-text-secondary">© { new Date().getFullYear() } crontreras1dev. { t("footer.rights") }</p>

          <p className="text-sm text-text-secondary">
            { t("footer.madeWith") }{ " " }
            <a href="https://github.com/crontreras1dev" target="_blank" rel="noopener noreferrer" className="hover:underline">crontreras1dev</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
