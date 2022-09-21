import SectionContainer from "./SectionContainer";
import Title from "./Title";
import FormElement from "./FormElement";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      firstName,
      email,
      message,
    };

    emailjs
      .send(
        "service_aigi5wb",
        "template_ayn8o87",
        data,
        "user_kRDdw3j2UfDytHYzmIZrR"
      )
      .then((res) => {
        setName("");
        setFirstName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SectionContainer section={"contact"}>
      <Title title="Contact" />
      <form className="bg-Dark dark:bg-Light w-3/4 sm:w-2/4 mb-10 p-3 flex flex-col justify-center items-center">
        <FormElement value={name} setValue={setName} name="Nom" type="text" />
        <FormElement
          value={firstName}
          setValue={setFirstName}
          name="Prénom"
          type="text"
        />
        <FormElement
          value={email}
          setValue={setEmail}
          name="Email"
          type="email"
        />
        <FormElement
          value={message}
          setValue={setMessage}
          name="Message"
          type="text"
        />
        <div
          onClick={handleSubmit}
          className="flex justify-center items-center gap-2 cursor-pointer text-xl font-bold text-Light dark:text-Dark p-2 border border-Light dark:border-Dark w-2/4 mt-5 rounded transition all delay-50 hover:scale-105"
        >
          <span>Envoyer</span>
          <SendIcon />
        </div>
      </form>
    </SectionContainer>
  );
}

export default Contact;
