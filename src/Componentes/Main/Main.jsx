import React from "react";

import "./Main.css";

import Imagem from "../assets/logan.png";

const Main = () => {
 
  return (
    <main >
      <div className="header">
      <div className="imagens">
          <img class="foto" src={Imagem} alt="foto de Nadyne Barbieri" />
        </div>
        <div className="texto">
          <ul id="Lk"></ul>
          <p>Logan Care é uma marca que nasceu no Camboja. Com foco em oferecer auto cuidado sem abusar do ambiente que nos rodeia. Desde cosméticos e chás, acreditamos na inovação para gerar um grande impacto positivo nas pautas atuais, tenho como principal princípio o consumo consciente e o reaproveitamento de matéria prima.</p>
          </div> 
      </div>
    </main>
  );
};

export default Main;
