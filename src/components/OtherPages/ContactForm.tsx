import axios from "axios";
import toast from "react-hot-toast";
import { Button, Stack, Typography } from "@mui/material";
import {
  CustomInput,
  CustomLabel,
  CustomTextarea,
} from "../CustomedComponents/styledComponents";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import {
  ErrorFieldMessage,
  FieldContainer,
  GridPanelCustom,
} from "../CustomedComponents/styledComponentsMUI";
import {
  ContactFirebaseURL,
  isProjectInDevelopmentMode,
} from "../../interfaces/GlobalConstants";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { dirtyFields, isValid, errors },
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  function submit(formData: typeof defaultValues) {
    console.log(formData);

    axios
      .post(ContactFirebaseURL, formData)
      .then(() => {
        toast.dismiss(); // in case there was another toast displayed already
        toast.success("Message sent !");

        reset();
      })
      .catch(() => {
        toast.dismiss(); // in case there was another toast displayed before
        toast.success("Error, please try again later !");
      });
  }

  return (
    <GridPanelCustom>
      <Typography variant="h5" textAlign="center" fontWeight={600} mb={7}>
        Write a message
      </Typography>
      <form className="contact-form" onSubmit={handleSubmit(submit)}>
        <Stack gap={1} mb={3}>
          <FieldContainer>
            <CustomLabel htmlFor="name">Name</CustomLabel>
            <Stack alignItems="flex-start">
              <CustomInput
                type="text"
                id="name"
                placeholder="ex: Andrew"
                title=""
                {...register("name", {
                  required: "The name is required !",
                  validate: (name) =>
                    name.trim().length > 0 || "The name cannot be empty !",
                })}
              />
              <ErrorFieldMessage>{errors.name?.message}</ErrorFieldMessage>
            </Stack>
          </FieldContainer>

          <FieldContainer>
            <CustomLabel htmlFor="email">Email address</CustomLabel>
            <Stack alignItems="flex-start">
              <CustomInput
                type="email"
                id="email"
                placeholder="ex: name@yahoo.com"
                title=""
                {...register("email", {
                  required: "The email address is required !",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "You must provide a valid email address !",
                  },
                })}
              />
              <ErrorFieldMessage>{errors.email?.message}</ErrorFieldMessage>
            </Stack>
          </FieldContainer>

          <Stack>
            <CustomTextarea
              placeholder="Write here ..."
              autoComplete="off"
              {...register("message", {
                required: "You need to provide a message !",
                validate: (message) =>
                  message.trim().length > 0 || "The message cannot be empty !",
              })}
            />
            <ErrorFieldMessage>{errors.message?.message}</ErrorFieldMessage>
          </Stack>
        </Stack>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={
            !(
              dirtyFields.name &&
              dirtyFields.message &&
              dirtyFields.email &&
              isValid
            )
          }
        >
          Send
        </Button>
      </form>
      {isProjectInDevelopmentMode && <DevTool control={control} />}
    </GridPanelCustom>
  );
}

export default ContactForm;
