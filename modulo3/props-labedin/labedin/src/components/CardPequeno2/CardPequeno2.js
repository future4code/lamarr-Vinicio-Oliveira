import React from 'react';
import './CardPequeno2.css'

function CardPequeno2(props) {
    return (
        <div className="pequeno2-container">
            <img src={ props.imagem } />
            <div>
                <p><strong>Endereco: </strong>{props.endereco}</p>
            </div>
        </div>
    )
}

export default CardPequeno2;