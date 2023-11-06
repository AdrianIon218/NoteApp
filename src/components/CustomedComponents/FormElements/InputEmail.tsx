import { useId, forwardRef } from "react";

function InputEmail(props: any, ref: any) {
  const emailId = useId();

  return (
    <div className="field">
      <label htmlFor={emailId} className="label-email">
        Email address
      </label>
      <input
        type="email"
        id={emailId}
        ref={ref}
        className="email-input"
        required
        placeholder="ex: name@yahoo.com"
        title=""
        onChange={(e) => {
          const txt = e.target.value;
          props.onChangeHandler?.(txt);
        }}
      ></input>
    </div>
  );
}

export default forwardRef(InputEmail);
