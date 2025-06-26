import React, { createContext, useContext, useState } from 'react'
import ThemeValue from './components/ThemeValue';
import ToggleTheme from './components/ToggleTheme';
import Provider from './components/Context';
// here we practice useContext hook , appliation as theme usage in the prgram 




function App() {
  return (
    <Provider>
      <ThemeValue />
      <ToggleTheme />


    </Provider>
  )
}

export default App