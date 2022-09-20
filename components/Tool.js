import React from "react";

function Tool({ title, Icon }) {
  return (
    <div className="text-Light dark:text-Dark flex items-center gap-3 text-2xl">
      <Icon />
      <h3>{title}</h3>
    </div>
  );
}

export default Tool;
