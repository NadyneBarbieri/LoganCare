import React from "react";
import "./Visao.css";
import visao from "../assets/Visao.png"
const Visao = () => {

  return (
    <main >
      <div className="header">
      <div className="imagens">
          <img class="foto" src={visao} alt="foto de Nadyne Barbieri" />
        </div>
        <div className="texto">
          <p>Visão: Oferecer uma relação simples e desmistificada com a sustentabilidade</p>
        </div> 
      </div>
    </main>
  );
};

export default Visao;
