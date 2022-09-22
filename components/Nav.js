import NavItem from "./NavItem";

function Nav() {
  return (
    <nav className=" hidden sm:w-2/4 sm:flex justify-evenly mx-5">
      <NavItem title="About" propHref="about" />
      <NavItem title="Works" propHref="works" />
      <NavItem title="Skills" propHref="skills" />
      <NavItem title="Contact" propHref="contact" />
    </nav>
  );
}

export default Nav;
