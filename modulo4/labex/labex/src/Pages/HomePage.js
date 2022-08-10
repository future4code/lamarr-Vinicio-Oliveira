import React from "react";
import { useNavigate } from "react-router-dom"

function HomePage(){

    const navigate = useNavigate()
    const goToListaViagens = () => {
        navigate("/trips/list")
    }

    const goToAdminPage = () => {
        navigate("/admin/trips/list")
    }

    return (
        <>
            <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
            <button onClick={goToListaViagens}>Lista de viagens</button>
            <button onClick={goToAdminPage}>Area admin</button>
        </>
    )

}

export default HomePage;