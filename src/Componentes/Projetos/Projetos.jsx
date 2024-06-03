import React from "react";
import './Projetos.css'

const Projetos = (props) => {

    return (
        <div class="cards">
            <div class="image">
            <img src={props.img} alt="" id={props.id} />
            </div>
            <div class="text-content">
            <h3>{props.nome}</h3>
            <p>{props.sobre}</p>
            <div className="botao">
            <button id="Visitar" onClick={() => window.open(props.href, "_blank")}>Comprar</button>
            </div>
            
        </div>
    </div>
    );
};

export default Projetos;