import { useState, useEffect } from "react";
import IconContainer from "./IconContainer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "next-themes";
import Nav from "./Nav";

function Header({ showMiniNav, setShowMiniNav }) {
  const [themeLoading, setThemeLoading] = useState(false);
  const [windowSize, setWindowSize] = useState(null);

  const { theme, setTheme } = useTheme();

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    setThemeLoading(true);

    if (windowSize > 640) {
      setShowMiniNav(false);
      setShowBurgerMenu(false);
    }

    if (windowSize < 640 && windowSize !== null) {
      console.log(windowSize);
      setShowBurgerMenu(true);
    }

    function getWindowSize() {
      const { innerWidth } = window;
      return innerWidth;
    }

    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  if (!themeLoading) {
    return null;
  }

  return (
    <header className="bg-DarkOppacity dark:bg-LightOppacity fixed top-0 left-0 w-full z-50">
      <div className="w-10/12 lg:w-2/4 sm:w-3/4 m-auto p-2 flex justify-between sm:justify-center items-center">
        <a
          href="#me"
          className="text-Light font-bold hover:cursor-pointer dark:text-Dark text-2xl"
        >
          Thomas Murzyn
        </a>
        <Nav />

        <div className="flex gap-5 items-center">
          {showBurgerMenu && (
            <MenuIcon
              onClick={() => setShowMiniNav(!showMiniNav)}
              className="text-Light dark:text-Dark border border-Light dark:border-Dark cursor-pointer rounded hover:text-HeadLight dark:hover:text-HeadLight"
            />
          )}
          <IconContainer
            Icon={theme === "light" ? DarkModeIcon : LightModeIcon}
            title={"dark mode"}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
