//hae to see the default exports and normal exports

import React from "react";
import export1, { add as jod, sub as ghata } from "./func1";
// import export1 from "./func1";

function App() {
  return (
    <div>
      <div>{jod()}</div>
      <div>{ghata()}</div>
      <div>{export1()}</div>
    </div>
  );
}

export default App;
