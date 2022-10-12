import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom"
import * as MyRoutes from "./Coordinator"
import { BASE_URL } from "../Constants/constants"
import useRequestData from "../Hook/useRequestData";

function ListTripsPage() {
    const navigate = useNavigate()

    const [data, isLoadingData, erroData] = useRequestData(`${BASE_URL}/trips/lists`)

    const tripsList = data.trips.map((list) => {
        return <div>{list.headers}</div>
    })

    return (
        <>
            <p>Para vermos todas as viagens</p>
            <button onClick={() => {MyRoutes.goToBack(navigate)}}>Voltar</button>
            <button onClick={() => {MyRoutes.goToApplicationForm(navigate)}}>Inscrever-se</button>
            
            {isLoadingData&&"...Carregando..."}
            {!isLoadingData&&data&&tripsList}
            {!isLoadingData&&!data&&erroData}
            
        </>
    )

}

export default ListTripsPage;