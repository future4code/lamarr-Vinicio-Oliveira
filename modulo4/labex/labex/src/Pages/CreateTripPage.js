import React from "react";
import { useNavigate } from "react-router-dom"


function CreateTripPage(){
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }
    return (
        <>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Enviar</button>
        </>
    )

}

export default CreateTripPage;