import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"


function TripDetailsPage() {
    const navigate = useNavigate()

    return (
        <>
            <p>Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
        </>
    )

}

export default TripDetailsPage;