import { useContext } from "react";
import { themeContext } from "./Context";


const ToggleTheme = () => {
  const { toggleTheme } = useContext(themeContext);

  return <>

    <button onClick={toggleTheme}>change theme </button>
  </>
}

export default ToggleTheme;