import React from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"

function LoginPage() {
    const navigate = useNavigate()
    
    return (
        <>
            <p>Para fazermos login como administrador</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button>Entrar</button>
        </>
    )

}

export default LoginPage;