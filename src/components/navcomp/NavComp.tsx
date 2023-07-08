import classes from './NavComp.module.css'
import logo from '../../images/note-logo-header.png'
import {Link, useLocation} from 'react-router-dom'

export default function Navcomp(){
  const pathname = useLocation().pathname.slice(1);
  
  const navPaths = [{path:['notes',''], navName:'Notes'},
                    {path:['settings'], navName:'Settings'},
                    {path:['support'], navName:'Support'}];
  
  const navElements = navPaths.map((item,index)=>{
    return item.path.includes(pathname) ? 
      <div key={index}>
        <span className={`${classes.nav_element} ${classes.nav_selected}`}>
        {item.navName}
        </span>
      </div> : 
      <div key={index}>
        <Link to={item.path[0]} className={classes.nav_element}>{item.navName}</Link>
      </div> });
  
  return (<nav className={classes.nav}>
    <img src={logo} className={classes.logo} alt='Note' />
    {navElements}
  </nav>);
}