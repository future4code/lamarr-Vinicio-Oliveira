import React, { useState } from 'react'

export function Formulario3() {

    const [opcao, setOpcao] = useState('Nenhum')

  return (
    <div>
        <h1>Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <h2>5. Porque você não terminou o curso de graduação?</h2>
        <input type="text" />
        <h2>6. Você fez algum curso complementar?</h2>
        <select value={opcao} onChange={(e) => setOpcao(e.target.value)}>
            <option>Nenhum</option>
            <option>Curso técnico</option>
            <option>Curso de inglês</option>
            <option>Não fiz curso complementar</option>
        </select>
        
      
    </div>
  );
}

export default Formulario3;