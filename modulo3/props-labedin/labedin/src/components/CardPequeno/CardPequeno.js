import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="pequeno-container">
            <img src={ props.imagem } />
            <div>
                <p><strong>Email: </strong>{props.email}</p>
            </div>
        </div>
    )
}

export default CardPequeno;