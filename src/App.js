import React, {useState} from "react";
import GlobalStyle from "./GlobalStyle";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { temaClaro, temaOscuro }  from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

console.log(temaClaro, temaOscuro);

function App() {
  
  const consultarTemaLS = localStorage.getItem("temaLS");
  console.log(consultarTemaLS)
  

  
  const [tema, setTema] = useState(consultarTemaLS === "true" ? true : false)
  
  const toggleTema = () => {
    setTema((tema) => !tema)
    localStorage.setItem("temaLS", !tema)
  }

  return (
    <ThemeProvider theme={ tema ? temaClaro : temaOscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>

      <Header />
      <Container />
      
    </ThemeProvider>
  );
}

export default App;
