function Button({ title, action }) {
  return (
    <button
      onClick={action}
      className="shadow-lg text-Light dark:text-Dark bg-Dark dark:bg-Light mt-16 border-2 px-3 py-4 text-lg font-bold rounded transition all delay-50 hover:scale-105"
    >
      {title}
    </button>
  );
}

export default Button;
