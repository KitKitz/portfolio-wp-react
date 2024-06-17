function Pointer({ className }) {
  return (
    <div
      className={`${className} relative w-7 mix-blend-difference text-accentAlt before:absolute before:bottom-[-5px] before:right-0 before:h-[8px] before:w-[8px]  before:rounded-[4px]`}
    ></div>
  );
}
export default Pointer;
