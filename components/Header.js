import { useState, useEffect } from "react";
import IconContainer from "./IconContainer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "next-themes";

function Header() {
  const [themeLoading, setThemeLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setThemeLoading(true);
  }, []);

  if (!themeLoading) {
    return null;
  }

  return (
    <header className="bg-DarkOppacity dark:bg-LightOppacity fixed top-0 left-0 w-full z-50">
      <div className="w-3/4 lg:w-2/4 m-auto p-2 flex justify-center items-center border-b border-Dark">
        <h2 className="text-Light font-bold hover:cursor-pointer dark:text-Dark text-2xl">
          Thomas Murzyn
        </h2>
        <nav className=" w-2/4 flex justify-evenly mx-5">
          <a
            href="#"
            className="text-Light hover:text-HeadLight hover:cursor-pointer hover:underline dark:text-Dark text-xl pt-1"
          >
            About
          </a>
          <a
            href="#"
            className="text-Light hover:text-HeadLight hover:cursor-pointer hover:underline dark:text-Dark text-xl pt-1"
          >
            Works
          </a>
          <a
            href="#"
            className="text-Light hover:text-HeadLight hover:cursor-pointer hover:underline dark:text-Dark text-xl pt-1"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-Light hover:text-HeadLight hover:cursor-pointer hover:underline dark:text-Dark text-xl pt-1"
          >
            Contact
          </a>
        </nav>
        <IconContainer
          Icon={theme === "light" ? DarkModeIcon : LightModeIcon}
          title={"dark mode"}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </header>
  );
}

export default Header;
