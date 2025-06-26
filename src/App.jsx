// another code practoce for useContext 

import { createContext, useContext, useState } from "react";


const OurContext = createContext();


function Provider({ children }) {
  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('John Dow')

  function toggleTheme() {
    setTheme((prev) => prev === 'light' ? "dark" : "light")
  }

  function changeName() {

    setName((prev)=> prev==='John Dow' ? "sydny sweeny" : "John Dow")
  }


  return <OurContext.Provider value={{ theme, toggleTheme, name, changeName }}>

    {children}
  </OurContext.Provider>
}

function Profile() {

  const { theme, toggleTheme, name, changeName } = useContext(OurContext)


  return <>
    <h1>The value of theme is : {theme}</h1>
    <h1>The value of name is : {name}</h1>
    <button onClick={toggleTheme}>Chnage Theme</button>
    <button onClick={changeName}>Change Name</button>

  </>
}

import React from 'react'

function App() {
  return (
    <Provider>
      <Profile />

    </Provider>
  )
}

export default App