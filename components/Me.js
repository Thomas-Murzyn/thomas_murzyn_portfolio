import AvatarContainer from "./AvatarContainer";

function Me() {
  return (
    <div className="h-screen w-3/4 lg:w-2/4 m-auto p-2 flex justify-center items-center bg-Dark dark:bg-Light">
      <div className="h-full flex flex-col justify-center items-center">
        <AvatarContainer />
        <h1 className="text-7xl font-bold text-Light dark:text-Dark text-center">
          Bonjour, je suis Thomas Developpeur Full stack.
        </h1>
        <button className="text-Dark dark:text-Light bg-Light dark:bg-Dark mt-16 border-2 px-3 py-4 text-lg font-bold rounded transition all delay-50 hover:scale-110">
          Me contacter
        </button>
      </div>
    </div>
  );
}

export default Me;
