import { Link, useLocation } from "react-router-dom";

export default function Navcomp() {
  const pathname = useLocation().pathname.slice(1);

  const navPaths = [
    { path: ["notes", ""], navName: "Notes" },
    { path: ["settings"], navName: "Settings" },
    { path: ["support"], navName: "Support" },
  ];

  const navElements = navPaths.map((item, index) => {
    return item.path.includes(pathname) ? (
      <div key={index}>
        <span className="nav_element nav_selected">{item.navName}</span>
      </div>
    ) : (
      <div key={index}>
        <Link to={item.path[0]} className="nav_element">
          {item.navName}
        </Link>
      </div>
    );
  });

  return (
    <nav className="nav">
      <img src="./note-logo-header.png" className="logo" alt="Note" />
      {navElements}
    </nav>
  );
}
