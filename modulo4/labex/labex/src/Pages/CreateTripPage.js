import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"


function CreateTripPage(){
    const navigate = useNavigate()

    return (
        <>
            <p>Formulário para o administrador criar uma nova viagem</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button>Enviar</button>
        </>
    )

}

export default CreateTripPage;