import SectionContainer from "./SectionContainer";
import Title from "./Title";
import FormElement from "./FormElement";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import emailjs from "emailjs-com";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
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
    } else {
      const data = {
        name,
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
      <Title title="Créons quelque chose ensemble" />
      <div className="text-Light dark:text-Dark text-xl border-2 border-Light dark:border-Dark p-2 rounded shadow-lg mt-6 mb-3">
        <Link href={"https://www.linkedin.com/in/thomas-murzyn/"} passHref>
          <div className="flex gap-2 items-center mt-2 cursor-pointer">
            <LinkedInIcon />
            <h4>Retrouvez-moi sur Linkedin</h4>
          </div>
        </Link>

        <Link href={"https://github.com/Thomas-Murzyn"} passHref>
          <div className="flex gap-2 items-center mt-2 cursor-pointer">
            <GitHubIcon />
            <h4>Découvrez mon travail sur Github </h4>
          </div>
        </Link>
      </div>

      <form className="my-() bg-Dark dark:bg-Light w-3/4 sm:w-2/4 mb-10 p-3 flex flex-col justify-center items-center">
        <FormElement
          value={name}
          setValue={setName}
          name="Nom"
          type="text"
          error={nameError}
          setError={setNameError}
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
