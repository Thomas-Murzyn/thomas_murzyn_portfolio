import React from "react";

function Me({ myRef }) {
  return (
    <div className="h-screen flex justify-center items-center bg-Dark dark:bg-Light">
      <h1
        ref={myRef}
        className="text-5xl text-Light dark:text-Dark toggleHidden"
      >
        Bonjour, je suis Thomas Developpeur Full stack.
      </h1>
    </div>
  );
}

export default Me;
