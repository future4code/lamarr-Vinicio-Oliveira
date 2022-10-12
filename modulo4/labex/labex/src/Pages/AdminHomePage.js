import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"

function AdminHomePage() {
    const navigate = useNavigate()
    
    return (
        <>
            <p>Página do administrador, para que possa ver sua lista de viagens</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button onClick={() => {MyRoutes.criarViagens(navigate)}}>Criar Viagens</button>
            <button onClick={() => {MyRoutes.goToDetails(navigate)}}>ver detalhes/delete viagens</button>
            <button onClick={() => {MyRoutes.login(navigate)}}>Login</button>

        </>
    )

}

export default AdminHomePage;