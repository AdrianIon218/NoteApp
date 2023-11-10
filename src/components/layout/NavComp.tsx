import { useId } from "react";
import { NavLink } from "react-router-dom";

const navPaths = [
  { path: ["notes", ""], navName: "Notes" },
  { path: ["settings"], navName: "Settings" },
  { path: ["contact"], navName: "Contact" },
];

export default function Navcomp() {
  const keyNav = useId();

  const navElements = navPaths.map((item, index) => {
    const currKey = `${keyNav}-${index}`;
    return (
      <div key={currKey}>
        <NavLink to={item.path[0]} className="nav_element">
          {item.navName}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className="nav">
      <img src="./note-header.png" className="logo" alt="Note" />
      {navElements}
    </nav>
  );
}
