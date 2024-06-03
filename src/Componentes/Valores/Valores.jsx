import React from "react";
import valores from "../assets/Valores.png"
import "./Valores.css";

const Valores = () => {

  return (
    <main >
      <div className="header">
      <div className="imagens">
          <img class="foto" src={valores} alt="foto de Nadyne Barbieri" />
        </div>
        <div className="texto">
          <p>Valores na logan care somos todos um só com a natureza, cuidar de nós mesmos também é cuidar do ambiente que nos rodeia, por isso quando pensamos em consumo responsável, sustentabilidade e auto cuidado pensamos em logan care.</p>
        </div> 
      </div>
    </main>
  );
};

export default Valores;
