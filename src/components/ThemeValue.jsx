import { useContext } from "react";
import { themeContext } from "./Context";

const ThemeValue = () => {

  const { theme } = useContext(themeContext);

  return <>

    <h1>The value of theme right now is : {theme}</h1>

  </>
}

export default ThemeValue