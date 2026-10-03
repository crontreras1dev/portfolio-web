import { useReveal } from "../hooks/useReveal";

const Reveal = ({ as: Tag = "div", className = "", children, ...props }) => {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ ref }
      className={ `transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${ visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6" } ${ className }` }
      { ...props }
    >
      { children }
    </Tag>
  );
};

export default Reveal;
