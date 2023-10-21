import { useState } from "react";

export default function Footer() {
  const [footerPointerStyle, setFooterStyle] = useState({});

  function mouseHandler(e: any) {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    setFooterStyle({ "--x": `${x}px`, "--y": `${y}px` });
  }

  return (
    <footer
      className="footer"
      onMouseMove={mouseHandler}
      style={footerPointerStyle}
    >
      <div className="footer__logo" />
      <div className="footer__logo_name">Notes</div>
    </footer>
  );
}
