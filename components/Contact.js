import SectionContainer from "./SectionContainer";
import Title from "./Title";
import FormElement from "./FormElement";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <SectionContainer section={"contact"}>
      <Title title="Contact" />
      <form className="bg-Dark dark:bg-Light w-3/4 sm:w-2/4 mt-5 mb-10 p-3 flex flex-col justify-center items-center">
        <FormElement name="Name" type="text" />
        <FormElement name="Email" type="email" />
        <FormElement name="Message" type="text" />
        <div className="flex justify-center items-center gap-2 cursor-pointer text-xl font-bold text-Light dark:text-Dark p-2 border border-Light dark:border-Dark w-2/4 mt-5 rounded transition all delay-50 hover:scale-105">
          <span>Envoyer</span>
          <SendIcon />
        </div>
      </form>
    </SectionContainer>
  );
}

export default Contact;
