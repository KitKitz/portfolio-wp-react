import { useState } from "react";
import Pointer from "./Pointer";

function HoverAnim({ children }) {
  const [isHovering, setIsHovering] = useState(false);

  const toggleHoverAnimation = () => {
    setIsHovering((prevState) => !prevState);
  };

  return (
    <div
      className="flex items-center gap-2"
      onMouseEnter={toggleHoverAnimation}
      onMouseLeave={toggleHoverAnimation}
    >
      <Pointer
        className={isHovering ? "border-b-2 text-black before:bg-black" : ""}
      />
      {children}
    </div>
  );
}
export default HoverAnim;
