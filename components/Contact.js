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
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [isValidate, setIsValidate] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  function resetValidate() {
    setTimeout(() => {
      setIsValidate(false);
    }, 5000);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Email invalide");
    } else if (containsSpecialChars(name)) {
      setNameError("Le nom ne doit pas contenir de caractères spéciaux.");
    } else if (containsSpecialChars(firstName)) {
      setFirstNameError(
        "Le prénom ne doit pas contenir de caractères spéciaux."
      );
    } else {
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
          setIsValidate(true);
          resetValidate();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <SectionContainer section={"contact"}>
      <Title title="Contact" />
      <form className="bg-Dark dark:bg-Light w-3/4 sm:w-2/4 mb-10 p-3 flex flex-col justify-center items-center relative">
        <FormElement
          value={name}
          setValue={setName}
          name="Nom"
          type="text"
          error={nameError}
          setError={setNameError}
        />
        <FormElement
          value={firstName}
          setValue={setFirstName}
          name="Prénom"
          type="text"
          error={firstNameError}
          setError={setFirstNameError}
        />
        <FormElement
          value={email}
          setValue={setEmail}
          name="Email"
          type="email"
          error={emailError}
          setError={setEmailError}
        />
        <FormElement
          value={message}
          setValue={setMessage}
          name="Message"
          type="text"
          error={messageError}
          setError={setMessageError}
        />
        <div
          onClick={handleSubmit}
          className="flex justify-center items-center gap-2 cursor-pointer text-xl font-bold text-Light dark:text-Dark p-2 border border-Light dark:border-Dark w-2/4 mt-5 rounded transition all delay-50 hover:scale-105"
        >
          <span>Envoyer</span>
          <SendIcon />
        </div>
        <p className="text-SuccessColor">
          {isValidate && "Votre message a bien été envoyé."}
        </p>
      </form>
    </SectionContainer>
  );
}

export default Contact;
