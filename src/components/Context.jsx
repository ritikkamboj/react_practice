import { createContext, useState } from "react";

export const themeContext = createContext();


const Provider = ({ children }) => {

  const [theme, setTheme] = useState('light')

  function toggleTheme() {

    setTheme((prev) => prev === "light" ? "dark" : "light")


  }

  return <themeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </themeContext.Provider>

}

export default Provider;

