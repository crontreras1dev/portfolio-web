import GitHub from "../assets/icons/github.svg";
import LinkedIn from "../assets/icons/linkedin.svg";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { sendEmail } from "../utils/email";

const CV_URL = "https://app.notion.com/p/Cristian-Contreras-Frontend-Developer-3ca0874829f780b28c16d8125ff5c89c?source=copy_link";

const SOCIALS = [
  { name: "GitHub", href: "https://github.com/crontreras1dev", icon: GitHub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/crontreras1dev/", icon: LinkedIn },
];

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full flex justify-center py-12 md:py-20">
      <Reveal className="w-full lg:w-2/3 flex flex-col items-start gap-4 text-left">
        <p className="text-sm md:text-base text-text-secondary">{ t("hero.greeting") }</p>

        <h1 className="text-4xl md:text-6xl font-bold text-text">{ t("hero.name") }</h1>

        <p className="text-lg md:text-2xl font-medium text-text">{ t("hero.role") }</p>

        <div className="max-w-prose flex flex-col gap-3 text-sm md:text-base text-text-secondary">
          {
            t("hero.intro").map(paragraph => (
              <p key={ paragraph }>{ paragraph }</p>
            ))
          }
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button onClick={ () => sendEmail(t) } className="bg-button-bg text-text px-4 py-2 text-sm md:text-base border border-border rounded-lg hover:bg-button-bg/80 transition-colors cursor-pointer">
            { t("hero.contact") }
          </button>

          <a
            href={ CV_URL }
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm md:text-base border border-border rounded-lg hover:bg-button-bg/50 transition-colors"
          >
            { t("hero.cv") }
          </a>

          {
            SOCIALS.map(({ name, href, icon }) => (
              <a
                key={ name }
                href={ href }
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ name }
                title={ name }
                className="p-2.5 border border-border rounded-lg hover:bg-button-bg/50 transition-colors"
              >
                <img src={ icon } alt="" className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            ))
          }
        </div>
      </Reveal>
    </section>
  );
};

export default Hero;
