import InputText from "../CustomedComponents/FormElements/InputText";
import TextArea from "../CustomedComponents/FormElements/TextArea";
import InputEmail from "../CustomedComponents/FormElements/InputEmail";
import { useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Button,
  Stack,
  styled,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

export const GridPanelCustom = styled(Stack)(({ theme }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  width: "70%",
  gap: "0.5rem",
  padding: theme.spacing(3),
  paddingTop: theme.spacing(5),

  backgroundColor: theme.palette.secondaryBackground.main,
  borderRadius: ".5rem",
  border: ".15rem solid black",
  borderColor: theme.palette.customBlue.main,

  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const userName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const textMessage = useRef<HTMLTextAreaElement>(null);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = textMessage.current!.value;
    const data = { username: name, useremail: email, message: text };

    axios
      .post(
        "https://noteapp-9b1f0-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
        data
      )
      .then(() => {
        toast.dismiss(); // in case there was another toast displayed before
        toast.success("Message sent !");
        setName("");
        setEmail("");
        setText("");

        userName.current!.value = "";
        inputEmail.current!.value = "";
        textMessage.current!.value = "";
      })
      .catch(() => {
        toast.dismiss(); // in case there was another toast displayed before
        toast.success("Error, please try again later !");
      });
  }

  return (
    <GridPanelCustom>
      <form className="contact-form" onSubmit={submit}>
        <Typography variant="h5" textAlign="center" fontWeight={600} pb={5}>
          Write a message
        </Typography>
        <InputText
          ref={userName}
          text="Name"
          placeholder="Andrew"
          onChangeHandler={setName}
        />
        <InputEmail ref={inputEmail} onChangeHandler={setEmail} />
        <TextArea name="textNote" ref={textMessage} onChangeHandler={setText} />

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          disabled={!(name.length > 0 && text.length > 0 && email.length > 0)}
        >
          Send
        </Button>
      </form>
    </GridPanelCustom>
  );
}

export default ContactForm;
