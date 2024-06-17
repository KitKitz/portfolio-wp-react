import Pointer from "./Pointer";

function ClickComponent({ children, className, as: Component, ...rest }) {
  return (
    <Component
      className={`uppercase text-sm flex items-center gap-2 hover:font-regular ${className}`}
      rel={Component === "a" ? "noopener noreferrer" : undefined}
      target={Component === "a" ? "_blank" : undefined}
      {...rest}
    >
      <Pointer className={"border-b-2 before:bg-accentAlt"} />
      {children}
    </Component>
  );
}
export default ClickComponent;
