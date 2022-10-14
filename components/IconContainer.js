function IconContainer({ Icon, title, theme, setTheme }) {
  return (
    <div layout onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icon className="text-MoonColor hover:text-ShadowMoonColor dark:text-Dark dark:hover:text-SunColor cursor-pointer" />
    </div>
  );
}

export default IconContainer;
