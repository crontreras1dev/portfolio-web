const SectionHeading = ({ title, subtitle }) => (
  <div className="w-full flex flex-col gap-0 py-10">
    <h2 className="text-xl font-bold md:text-2xl">{ title }</h2>

    { subtitle && <p className="text-sm md:text-base text-text-secondary">{ subtitle }</p> }
  </div>
);

export default SectionHeading;
