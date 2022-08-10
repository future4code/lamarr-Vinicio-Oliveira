import React from "react";
import { useNavigate } from "react-router-dom"


function ApplicationFormPage() {
    const  navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }


    return (
        <>
            <p>Formulário para o usuário se candidatar para viagens</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Enviar</button>

        </>
    )

}

export default ApplicationFormPage;