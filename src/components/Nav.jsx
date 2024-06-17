import { useState } from "react";
import NavListItem from "../components/NavListItem";
import Pointer from "./Pointer";

function Nav() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function toggleMenu() {
    setIsMenuOpened(!isMenuOpened);
  }

  function closeMenu() {
    toggleMenu();
  }

  return (
    <header className="flex flex-col items-end">
      <div className="py-8 pr-8 fixed z-[900] flex justify-end items-center gap-1.5 mix-blend-difference">
        <Pointer className={"border-b-2 before:bg-accentAlt"} />
        <button onClick={toggleMenu} className="uppercase text-grey">
          {isMenuOpened ? "Close" : "Menu"}
        </button>
      </div>
      <nav
        className={` ${
          isMenuOpened ? "visible" : "invisible"
        } w-screen h-screen fixed z-[800] bg-accent inset-0 overflow-x-hidden`}
      >
        <ul
          onClick={closeMenu}
          className="text-black uppercase text-[3rem] lg:text-[6rem] leading-tight flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          <NavListItem to="/#">Home</NavListItem>
          <NavListItem to="/#about">About</NavListItem>
          <NavListItem to="/#projects">Projects</NavListItem>
          <NavListItem to="/#contact">Contact</NavListItem>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
