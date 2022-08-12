import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"

function ApplicationFormPage() {
    const  navigate = useNavigate()

    return (
        <>
            <p>Formulário para o usuário se candidatar para viagens</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button>Enviar</button>

        </>
    )

}

export default ApplicationFormPage;