import React, { useEffect, useRef } from "react";
import Me from "../components/Me";

export default function Home() {
  const myRef = useRef();

  useEffect(() => {
    console.log(myRef);

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("🚀 ~ file: index.js ~ line 12 ~ observer ~ entry", entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("toggleShow");
      } else {
        entry.target.classList.remove("toggleShow");
      }
    });

    observer.observe(myRef.current);
  }, []);

  return (
    <div className="h-screen bg-Dark dark:bg-Light">
      <Me myRef={myRef} />
      <div className="h-screen flex justify-center items-center bg-Dark dark:bg-Light">
        <h2 className="text-5xl text-Light dark:text-Dark">Wooo scroolll</h2>
      </div>
      <div className="h-screen flex justify-center items-center bg-Dark dark:bg-Light">
        <h2 className="text-5xl text-Light dark:text-Dark">Wooo ihi</h2>
      </div>
    </div>
  );
}
