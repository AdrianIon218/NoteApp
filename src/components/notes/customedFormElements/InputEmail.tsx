import generalcls from "./GeneralFormElements.module.css";
import { useId, forwardRef } from "react";
import classes from "./InputEmail.module.css";

function InputEmail(props: any, ref: any) {
  const emailId = useId();

  return (
    <div className={generalcls.field}>
      <label htmlFor={emailId} className={classes.label}>
        Email address
      </label>
      <input
        type="email"
        id={emailId}
        ref={ref}
        className={classes.email}
        required
        placeholder="ex:name@yahoo.com"
        title=""
      ></input>
    </div>
  );
}

export default forwardRef(InputEmail);
