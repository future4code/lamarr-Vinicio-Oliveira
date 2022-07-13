import React, { useState } from 'react'

export function Formulario1() {

    const [opcao, setOpcao] = useState('Ensino médio incompleto')

  return (
    <div>
        <h1>Etapa 1 - DADOS GERAIS</h1>
        <h2>1. Qual o seu nome?</h2>
        <input type="text" />
        <h2>2. Qual a sua idade?</h2>
        <input type="text" />
        <h2>3. Qual o seu e-mail?</h2>
        <input type="text" />
        <h2>4. Qual o seu grau de escolaridade?</h2>
        <select value={opcao} onChange={(e) => setOpcao(e.target.value)}>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
        </select>
    </div>
  );
}

export default Formulario1;