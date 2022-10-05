console.log("exercicio 4");

const converteCelsius = (temp, escala) => {
    let farenheit
    let kelvin
    if(escala === "F") {
        farenheit = temp * (9/5) + 32
        console.log(`${temp}° Celsius é equivalente a ${farenheit}° Farenheit`)
    } else if(escala === "K") {
        kelvin = temp + 273.15
        console.log(`${temp}° Celsius é equivalente a ${kelvin}° Kelvin`)
    } else {
        console.log(`Erro. Parâmetro inválido ('nome do parâmetro')`)
    }

}

converteCelsius(30, "S")