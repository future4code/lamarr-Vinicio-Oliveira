import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"

function HomePage(){
    const navigate = useNavigate()
    
    return (
        <>
            <p>Para o usuário escolher entre Área Administrativa e Lista de Viagens</p>
            <button onClick={() => {MyRoutes.goToListaViagens(navigate)}}>Lista de viagens</button>
            <button onClick={() => {MyRoutes.goToAdminPage(navigate)}}>Area admin</button>
        </>
    )

}

export default HomePage;