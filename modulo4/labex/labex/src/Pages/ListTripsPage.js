import React from "react";
import { useNavigate } from "react-router-dom"

function ListTripsPage() {

    const navigate = useNavigate()
    const goToApplicationForm = () => {
        navigate("/trips/application")
    }

    const goToBack = () => {
        navigate(-1)
    }


    return (
        <>
            <p>Para vermos todas as viagens</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={goToApplicationForm}>Inscrever-se</button>
        </>
    )

}

export default ListTripsPage;