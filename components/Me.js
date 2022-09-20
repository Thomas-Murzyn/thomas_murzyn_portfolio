import Button from "./Button";

function Me() {
  return (
    <div className="h-screen w-3/4 lg:w-2/4 m-auto p-2 flex flex-col justify-center items-center bg-Dark dark:bg-Light">
      <h1 className="text-7xl font-bold text-Light dark:text-Dark text-center">
        Bonjour,&nbsp; je suis Thomas Developpeur Web.
      </h1>
      <Button title="Me contacter" />
    </div>
  );
}

export default Me;
