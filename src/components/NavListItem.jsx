import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import HoverAnim from "./HoverAnim";

function ListItem({ to, children }) {
  //custom scroll effect depending on the route
  const location = useLocation();

  function scrollWithOffset(el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset - 32,
      behavior: "smooth",
    });
  }

  function customScroll(el) {
    if (location.pathname === "/") {
      scrollWithOffset(el);
    } else {
      setTimeout(() => {
        scrollWithOffset(el);
      }, 1600);
    }
  }

  return (
    <HoverAnim>
      <li>
        <HashLink scroll={customScroll} to={to}>
          {children}
        </HashLink>
      </li>
    </HoverAnim>
  );
}

export default ListItem;
