import React, { createContext, useContext, useState } from "react";

const valueContext = createContext();

function App() {

  const [value, setValue] = useState(1);
  return (
    <valueContext.Provider value={{ value }}>
      <div>

        <Comp />
      </div>
    </valueContext.Provider>
  );
}

const Comp = () => {
  const { value } = useContext(valueContext)
  return <p> Jai maata di {value}</p>;
};

export default App;
