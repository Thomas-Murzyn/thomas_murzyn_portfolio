function IconContainer({ Icon, title, theme, setTheme }) {
  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      <Icon className="text-MoonColor dark:text-Dark hover:text-ShadowMoonColor cursor-pointer" />
    </div>
  );
}

export default IconContainer;
