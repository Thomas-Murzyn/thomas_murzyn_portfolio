function Button({ title, action, Icon }) {
  return (
    <div
      onClick={action}
      className="cursor-pointer flex justify-center items-center gap-2 shadow-lg text-Light dark:text-Dark bg-Dark dark:bg-Light mt-16 border-2 px-3 py-4 text-lg font-bold rounded transition all delay-50 hover:scale-105"
    >
      <span>{title}</span>
      <Icon />
    </div>
  );
}

export default Button;
