import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"
import { BASE_URL } from "../Constants/constants"
import useRequestData from "../Hook/useRequestData";

function ListTripsPage() {
    const navigate = useNavigate()

    const data = useRequestData(`${BASE_URL}/trips/lists`)
 
    return (
        <>
            <p>Para vermos todas as viagens</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button onClick={() => {MyRoutes.goToApplicationForm(navigate)}}>Inscrever-se</button>
        </>
    )

}

export default ListTripsPage;