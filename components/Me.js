import Button from "./Button";
import SectionContainer from "./SectionContainer";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Me() {
  return (
    <SectionContainer section="me">
      <h1 className="text-7xl font-bold text-Light dark:text-Dark text-center">
        Bonjour,&nbsp; je suis Thomas Developpeur Web.
      </h1>
      <a href="#contact">
        <Button title="Me contacter" Icon={EmailOutlinedIcon} />
      </a>
    </SectionContainer>
  );
}

export default Me;
