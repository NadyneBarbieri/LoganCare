import React, { useState } from "react";
import './Projetos.css';

const Projetos = (props) => {
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    const handleButtonClick = () => {
        setShowMoreInfo(!showMoreInfo);
    };

    return (
        <div className="cards">
            <div className="image">
                <img src={props.img} alt="" id={props.id} />
            </div>
            <div className="text-content">
                <h3>{props.nome}</h3>
                <p>{props.sobre}</p>
                {showMoreInfo && (
                    <div className="more-info">
                        <p>{props.moreInfo}</p>
                    </div>
                )}
                <div className="botao">
                    <button id="Visitar" onClick={handleButtonClick}>
                        {showMoreInfo ? "Mostrar menos" : "Saiba mais"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projetos;
