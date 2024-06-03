import React from "react";

import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <div className="esquerda">
        <h1>Nadyne Barbieri</h1>
        <p>
          Com quase quatro anos de experiência profissional em diferentes áreas,
          sou uma desenvolvedora de software júnior que busca novos desafios e
          oportunidades de aprendizado. Tenho competências em React, JavaScript,
          HTML5 e CSS3, além de habilidades de comunicação, persuasão, e
          relacionamento interpessoal, adquiridas em minha atuação como
          telemarketing e auxiliar de RH.
          <br />
          <br />
          Atualmente curso bacharelado em Engenharia Mecatrônica na FIAP, com o
          objetivo de aprofundar meus conhecimentos em hardware, IoT e robótica.
          Sou apaixonada pela tecnologia e pela lógica, e quero trabalhar
          construindo e evoluindo novas ideias que possam facilitar e melhorar a
          vida das pessoas.
        </p>
        <img className="esquerdaSobreMim" alt="" />
      </div>
      <img className="sobremim" alt="" />
    </div>
  );
};
export default Sobre;
