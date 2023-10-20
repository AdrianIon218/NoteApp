import { useId } from "react";
import { Link, useLocation } from "react-router-dom";

const navPaths = [
  { path: ["notes", ""], navName: "Notes" },
  { path: ["settings"], navName: "Settings" },
  { path: ["support"], navName: "Support" },
];

export default function Navcomp() {
  const pathname = useLocation().pathname.slice(1);
  const keyNav = useId();

  const navElements = navPaths.map((item, index) => {
    const currKey = `${keyNav}-${index}`;
    return item.path.includes(pathname) ? (
      <div key={currKey}>
        <span className="nav_element nav_selected">{item.navName}</span>
      </div>
    ) : (
      <div key={currKey}>
        <Link to={item.path[0]} className="nav_element">
          {item.navName}
        </Link>
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
