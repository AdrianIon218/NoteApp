import TemporalNotification from "../CustomedComponents/TemporalNotification";
import InputText from "../notes/customedFormElements/InputText";
import TextArea from "../notes/customedFormElements/TextArea";
import InputEmail from "../notes/customedFormElements/InputEmail";
import { useState, useRef } from "react";
import axios from "axios";

function ContactForm() {
  const [showMessage, setShowMessage] = useState(false);
  const userName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const textMessage = useRef<HTMLTextAreaElement>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!showMessage) {
      const name = userName.current!.value;
      const email = inputEmail.current!.value;
      const text = textMessage.current!.value;
      const data = { username: name, useremail: email, message: text };

      axios
        .post(
          "https://noteapp-9b1f0-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
          data,
        )
        .then((res) => {
          setShowMessage(true);
          userName.current!.value = "";
          inputEmail.current!.value = "";
          textMessage.current!.value = "";
        })
        .catch((err) => console.error(err));
    }
  }

  function hideMessage() {
    setShowMessage(false);
  }

  return (
    <>
      {showMessage && (
        <TemporalNotification hideMessage={hideMessage} durationSeconds={2.65}>
          Message sent !
        </TemporalNotification>
      )}
      <form className="contact-form" onSubmit={submit}>
        <h2>Fill out the form for support </h2>
        <InputText ref={userName} text="Name" />
        <InputEmail ref={inputEmail} />
        <TextArea name="textNote" ref={textMessage} />
        <button className="btn">Send</button>
      </form>
    </>
  );
}

export default ContactForm;
