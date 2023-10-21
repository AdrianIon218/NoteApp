import { useState } from "react";

export default function Footer() {
  const [footerPointerStyle, setFooterStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const isFirstEnterOfUser = Object.keys(footerPointerStyle).length === 0;

  function mouseHandler(e: any) {
    if (!isMobile) {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      setFooterStyle({ "--x": `${x}px`, "--y": `${y}px` });
    }
  }

  return (
    <footer
      className="footer"
      onMouseMove={mouseHandler}
      onTouchStart={() => setIsMobile(true)}
      style={isFirstEnterOfUser ? {} : footerPointerStyle}
    >
      <div className="footer__logo" />
      <div className="footer__logo_name">Notes</div>
    </footer>
  );
}
