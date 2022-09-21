function FormElement({ name, type }) {
  return (
    <div className="text-xl flex flex-col gap-2 mt-10 p-2 w-11/12">
      <label className="text-Light dark:text-Dark" htmlFor={name}>
        {name}
      </label>
      {name === "Message" ? (
        <textarea
          className="bg-DarkGray dark:bg-Light border border-Light dark:border-Dark  rounded text-Light dark:text-Dark p-2 outline-none"
          name={name}
          id={name}
          type={type}
        />
      ) : (
        <input
          className="bg-DarkGray dark:bg-Light border border-Light dark:border-Dark  rounded text-Light dark:text-Dark p-2 outline-none"
          name={name}
          id={name}
          type={type}
        />
      )}
    </div>
  );
}

export default FormElement;
