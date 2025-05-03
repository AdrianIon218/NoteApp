import InputText from "../CustomedComponents/FormElements/InputText";
import InputEmail from "../CustomedComponents/FormElements/InputEmail";
import { useState, useRef } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Typography } from "@mui/material";
import { CustomTextarea } from "../CustomedComponents/styledComponents";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { GridPanelCustom } from "../CustomedComponents/styledComponentsMUI";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userName = useRef<HTMLInputElement>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const textMessageRef = useRef<HTMLTextAreaElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { dirtyFields },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  function submit(formData: typeof defaultValues) {
    const data = {
      username: name,
      useremail: email,
      message: formData.message,
    };
    console.log("Adi", data);

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

        userName.current!.value = "";
        inputEmail.current!.value = "";
        textMessageRef.current!.value = "";
      })
      .catch(() => {
        toast.dismiss(); // in case there was another toast displayed before
        toast.success("Error, please try again later !");
      });
  }

  return (
    <GridPanelCustom>
      <form className="contact-form" onSubmit={handleSubmit(submit)}>
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
        <CustomTextarea
          placeholder="Write here ..."
          autoComplete="off"
          {...register("message")}
        />

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          disabled={
            !(name.length > 0 && dirtyFields.message && email.length > 0)
          }
        >
          Send
        </Button>
      </form>
      <DevTool control={control} />
    </GridPanelCustom>
  );
}

export default ContactForm;
