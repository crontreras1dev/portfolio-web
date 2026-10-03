import { skillGroups } from "../data/skills";
import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="w-full flex flex-col justify-center items-center py-10">
      <Reveal className="w-full lg:w-2/3 py-5 flex flex-col justify-center items-center gap-5">
        <SectionHeading title={ t("skills.title") } subtitle={ t("skills.subtitle") } />

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {
            skillGroups.map(group => (
              <div key={ group.id } className="flex flex-col gap-3 p-5 border border-border rounded-lg bg-bg shadow-lg">
                <h3 className="font-bold text-text">{ t(`skills.groups.${ group.id }`) }</h3>

                <ul className="flex flex-wrap gap-2">
                  {
                    group.skills.map(skill => (
                      <li key={ skill } className="px-3 py-1 text-sm text-text bg-button-bg border border-border rounded-full">
                        { skill }
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
