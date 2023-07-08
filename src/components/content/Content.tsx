import classes from './Content.module.css'

export default function Content(props:any){
  return (<main className={classes.main}>
  {props.children}
  </main>);
}