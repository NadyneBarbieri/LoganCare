import React from "react";
import missao from "../assets/Missao.png"
import "./Missao.css";

const Missao = () => {
  return (
    <main >
      <div className="header">
      <div className="imagens">
          <img class="foto" src={missao} alt="foto de Nadyne Barbieri" />
        </div>
        <div className="texto">
          <p>Missão: oferecer auto cuidado físico e mental para nosso consumidores</p>
        </div> 
      </div>
    </main>
  );
};

export default Missao;
