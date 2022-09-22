import React from "react";

function NavItem({ title, propHref }) {
  return (
    <a
      href={`#${propHref}`}
      className="text-Light hover:text-HeadLight dark:hover:text-HeadLight hover:underline cursor-pointer dark:text-Dark text-xl pt-1"
    >
      {title}
    </a>
  );
}

export default NavItem;
