import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setLoading(true);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="h-screen bg-Dark dark:bg-Light">
      <h1 className="text-5xl text-Light dark:text-Dark">Hello world</h1>
    </div>
  );
}
