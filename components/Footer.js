import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

function Footer() {
  return (
    <div className="text-Light dark:text-Dark flex flex-col justify-center items-center py-2">
      <div className="space-x-2">
        <Link href={"https://www.linkedin.com/in/thomas-murzyn/"} passHref>
          <LinkedInIcon className="cursor-pointer" />
        </Link>
        <Link href={"https://github.com/Thomas-Murzyn"} passHref>
          <GitHubIcon className="cursor-pointer" />
        </Link>
      </div>

      <h3>© 2022 Thomas Murzyn, Tous droit réservés.</h3>
    </div>
  );
}

export default Footer;
