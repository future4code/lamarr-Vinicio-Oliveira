import React from "react";
import { useNavigate } from "react-router-dom"


function TripDetailsPage() {
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }
    return (
        <>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <button onClick={goToBack}>Voltar</button>
        </>
    )

}

export default TripDetailsPage;