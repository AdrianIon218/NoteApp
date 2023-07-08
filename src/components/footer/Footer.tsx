import classes from './Footer.module.css'
import noteLogo from '../../images/note-logo-footer.png'

export default function Footer(){
  return (<footer className={classes.footer}>
  <img src={noteLogo} alt='Note' className={classes.logo} />
  <div className={classes['logo-name']}>Notes</div>
  </footer>);
}