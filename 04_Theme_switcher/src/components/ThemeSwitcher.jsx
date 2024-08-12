import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="items-center">
        <button
      onClick={toggleTheme}
      className={`py-2 px-4 rounded ${
        theme === "light" ? "bg-blue-500 text-white" : "bg-gray-800 text-white"
      }`}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
    </div>
  );
};

export default ThemeSwitcher;
