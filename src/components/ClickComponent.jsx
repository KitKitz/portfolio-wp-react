import Pointer from "./Pointer";

function ClickComponent({ children, className, as: Component, ...rest }) {
  return (
    <Component
      className={`border-2 border-black rounded-full p-4 text-md font-medium tracking-tight text-black flex items-center justify-center gap-2 hover:text-grey  hover:font-normal ${className}`}
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
