import React from "react";
import Main from "../Componentes/Main/Main";
import Missao from "../Componentes/Missao/Missao"
import Visao from "../Componentes/Visao/Visao"
import Valores from "../Componentes/Valores/Valores"

const Inicio = ({toggleDarkMode, darkMode}) => {
    return(
      <>
      <Main toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      <Missao/>
      <Visao/>
      <Valores/>
      </>
    )
}
export default Inicio;