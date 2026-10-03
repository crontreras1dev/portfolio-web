import { useLanguage } from "../i18n/LanguageContext";
import Reveal from "./Reveal";

const Contact = ({ email, onContact }) => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="w-full flex flex-col justify-center items-center py-10">
      <Reveal className="w-full lg:w-2/3 p-8 md:p-12 flex flex-col justify-center items-center gap-5 text-center border border-border rounded-lg bg-button-bg/30 shadow-lg">
        <h2 className="text-xl font-bold md:text-2xl">{ t("contact.title") }</h2>

        <p className="max-w-xl text-sm md:text-base text-text-secondary">{ t("contact.subtitle") }</p>

        <button onClick={ onContact } className="bg-button-bg text-text px-6 py-2 text-sm md:text-base border border-border rounded hover:bg-button-bg/80 transition-colors cursor-pointer">
          { t("contact.button") }
        </button>

        <p className="text-sm text-text-secondary">
          { t("contact.orEmail") }{ " " }
          <a href={ `mailto:${ email }` } className="text-text hover:underline">{ email }</a>
        </p>
      </Reveal>
    </section>
  );
};

export default Contact;
