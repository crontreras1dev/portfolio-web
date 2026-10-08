import { experience } from "../data/experience";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Experience = () => {
  const { t, localize } = useLanguage();

  return (
    <section id="experience" className="w-full flex flex-col justify-center items-center py-10">
      <Reveal className="w-full lg:w-2/3 py-5 flex flex-col justify-center gap-5">
        <SectionHeading title={ t("experience.title") } subtitle={ t("experience.subtitle") } />

        <ol className="relative border-s border-border ms-3 flex flex-col gap-10">
          {
            experience.map(item => (
              <li key={ item.id } className="relative ps-8">
                <span aria-hidden="true" className="absolute -start-[7px] top-1.5 w-3 h-3 rounded-full bg-text-secondary ring-4 ring-bg" />

                <p className="text-xs uppercase tracking-wider text-text-secondary">{ localize(item.type) }</p>

                <h3 className="text-lg font-bold text-text">{ localize(item.title) }</h3>

                <p className="text-sm md:text-base text-text-secondary">{ localize(item.description) }</p>

                <ul className="flex flex-wrap gap-2 mt-2">
                  {
                    item.tools.map(tool => (
                      <li key={ tool } className="px-2 py-0.5 text-xs text-text bg-button-bg border border-border rounded-full">
                        { tool }
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ol>
      </Reveal>
    </section>
  );
};

export default Experience;
