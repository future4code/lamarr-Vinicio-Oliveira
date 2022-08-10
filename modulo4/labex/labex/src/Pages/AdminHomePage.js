import React from "react";
import { useNavigate } from "react-router-dom"

function AdminHomePage() {
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }
    const criarViagens = () => {
        navigate("/admin/trips/create")
    }
    const goToDetails = () => {
        navigate("/admin/trips/:id")
    }
    const login = () => {
        navigate("/login")
    }


    return (
        <>
            <p>Página do administrador, para que possa ver sua lista de viagens</p>
            <button onClick={goToBack}>Voltar</button>
            <button onClick={criarViagens}>Criar Viagens</button>
            <button onClick={goToDetails}>ver detalhes/delete viagens</button>
            <button onClick={login}>Login</button>

        </>
    )

}

export default AdminHomePage;