import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import {YEAR, NAME} from "./config/contants";
import { useState } from "react";


function App() {

  const [theme, setTheme] = useState(false)

  const onChangeTheme = () => {
    setTheme(prev => !prev)
  }

  return (
    <div className={theme ? 'dark' : ''}>
     <header>
       <Navbar theme={theme} onChangeTheme={onChangeTheme} />
      <h1>Mi aplicación subida a git</h1>
     </header>
     <Banner/>
     <footer>
      Creado por {NAME} en el año {YEAR}
     </footer>
     </div>
  );
}

export default App;
