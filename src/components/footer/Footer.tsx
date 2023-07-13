import noteLogo from "../../images/note-logo-footer.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={noteLogo} alt="Note" className="footer__logo" />
      <div className="footer__logo_name">Notes</div>
      
    </footer>
  );
}