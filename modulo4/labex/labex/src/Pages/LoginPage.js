import React from "react";
import { useNavigate } from "react-router-dom"


function LoginPage() {
    const navigate = useNavigate()
    const goToBack = () => {
        navigate(-1)
    }
    
    return (
        <>
            <p>Para fazermos login como administrador</p>
            <button onClick={goToBack}>Voltar</button>
            <button>Entrar</button>
        </>
    )

}

export default LoginPage;