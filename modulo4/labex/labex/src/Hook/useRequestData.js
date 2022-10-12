import React, { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)
    const [erro, setErro] = useState(undefined)

    useEffect(() => {
        setIsLoading(true)
        axios.get(url).then(response => {
            setIsLoading(false)
            setData(response.data)
        }).catch(error => {
            setIsLoading(false)
            setErro(error)
        })
    }, [])

    return [data, isLoading, erro];
}

export default useRequestData;