import NavItem from "./NavItem";

function MiniNav() {
  return (
    <nav className="flex flex-col justify-center items-center fixed top-14 right-10 z-50 w-28 border-2 border-Light dark:border-Dark rounded bg-Dark dark:bg-Light shadow-xl">
      <NavItem title="About" propHref="about" />
      <NavItem title="Works" propHref="works" />
      <NavItem title="Skills" propHref="skills" />
      <NavItem title="Contact" propHref="contact" />
    </nav>
  );
}

export default MiniNav;
