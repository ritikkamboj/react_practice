import React, { createContext, useContext, useState } from 'react'
// here we practice useContext hook , appliation as theme usage in the prgram 


const themeContext = createContext();


const Provider = ({ children }) => {

  const [theme, setTheme] = useState('light')

  function toggleTheme() {

    setTheme((prev) => prev === "light" ? "dark" : "light")


  }

  return <themeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </themeContext.Provider>

}

const ThemeValue = () => {

  const { theme } = useContext(themeContext);

  return <>

    <h1>The value of theme right now is : {theme}</h1>

  </>
}


const ToggleTheme = () => {
  const { toggleTheme } = useContext(themeContext);

  return <>

    <button onClick={toggleTheme}>change theme </button>
  </>
}



function App() {
  return (
    <Provider>
      <ThemeValue />
      <ToggleTheme />


    </Provider>
  )
}

export default App