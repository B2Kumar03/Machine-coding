import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeContext } from "./components/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      } min-h-screen`}
    >
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Theme Changer App</h1>
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
