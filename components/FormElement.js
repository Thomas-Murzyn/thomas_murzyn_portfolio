function FormElement({ name, type, value, setValue, error, setError }) {
  return (
    <div className="text-xl flex flex-col gap-2 mt-5 p-2 w-11/12">
      <label className="text-Light dark:text-Dark" htmlFor={name}>
        {name}
      </label>
      {name === "Message" ? (
        <textarea
          value={value}
          onChange={(e) => {
            setError(null);
            setValue(e.target.value);
          }}
          className="bg-DarkGray dark:bg-Light border border-Light dark:border-Dark  rounded text-Light dark:text-Dark p-2 outline-none"
          name={name}
          id={name}
          type={type}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => {
            setError(null);
            setValue(e.target.value);
          }}
          className="bg-DarkGray dark:bg-Light border border-Light dark:border-Dark rounded text-Light dark:text-Dark p-2 outline-none h-10 shadow-lg"
          name={name}
          id={name}
          type={type}
        />
      )}
      <p className="text-ErrorColor">{error}</p>
    </div>
  );
}

export default FormElement;
