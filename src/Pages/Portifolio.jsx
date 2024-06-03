import React from "react";
import Card from "../Componentes/Projetos/Projetos";
import '../Componentes/Projetos/Projetos.css'
import Chá from '../Componentes/assets/Chá.jpg' 
import Creme from '../Componentes/assets/Creme.jpg' 
import Gotas from '../Componentes/assets/Gotas.jpg' 
const Portifolio = () => {
  const akilahyz = "https://akilahys.netlify.app/";
    return(
        <div className="Portifolio">
          <Card nome={"R$ 9,99"} sobre={"creme para ajudar o metabolismo "} img={Chá} />
          <Card nome={"R$ 90,99"}sobre={"creme para ajudar o metabolismo"} img={Creme} />
          <Card nome={"R$ 9,99"} sobre={"creme para ajudar o metabolismo"} img={Gotas}/>
      </div>
    )
}
export default Portifolio;