import InputText from "../CustomedComponents/FormElements/InputText";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import InputEmail from "../CustomedComponents/FormElements/InputEmail";
import { useState, useRef } from "react";
import axios from "axios";
import { useNotification } from "../Contexts/NotificationContext";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const userName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const textMessage = useRef<HTMLTextAreaElement>(null);
  const notificationCtx = useNotification();

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = textMessage.current!.value;
    const data = { username: name, useremail: email, message: text };

    axios
      .post(
        "https://noteapp-9b1f0-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        data,
      )
      .then(() => {
        notificationCtx.showNotification("Message sent !");
        setName("");
        setEmail("");
        setText("");

        userName.current!.value = "";
        inputEmail.current!.value = "";
        textMessage.current!.value = "";
      })
      .catch((err) =>
        notificationCtx.showNotification(
          "Error, please try again later!",
          "warning",
        ),
      );
  }

  return (
    <form className="panel-big contact-form" onSubmit={submit}>
      <h2>Send a message</h2>
      <InputText
        ref={userName}
        text="Name"
        placeholder="Andrew"
        onChangeHandler={setName}
      />
      <InputEmail ref={inputEmail} onChangeHandler={setEmail} />
      <TextArea name="textNote" ref={textMessage} onChangeHandler={setText} />
      <button
        className="btn"
        disabled={!(name.length > 0 && text.length > 0 && email.length > 0)}
      >
        Send
      </button>
    </form>
  );
}

export default ContactForm;
