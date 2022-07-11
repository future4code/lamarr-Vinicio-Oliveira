import './App.css';
import logotipo from './img/foguinho.jpg'
import styled from 'styled-components'
import { useState } from 'react';

const Comeco = styled.header`
  display: flex;
  justify-content: center;
`
const Imagem = styled.img`
  width: 100px;
  height: 100px;
`

const Container = styled.div`
  display: flex;
`
const Direito = styled.nav`
  width: 400px;
  background-color: orange;
`

const Meio = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 0 20px 0;
  height: 580px;
  background-color: #f2eadd;
`
const Escreve = styled.input`
  margin-right: 10px;
  width: 180px;
  border-radius: 5px;
`

const Escreve2 = styled.input`
  width: 500px;
  border-radius: 5px;
`


const Botao = styled.button`
  margin-left: 15px;
`
const Chat = styled.div`
  display: flex;
  justify-content: center;
`

const Esquerdo = styled.aside`
  width: 400px;
  background-color: orange;
`

const Rodape = styled.footer`
  background-color: grey;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`



function App() {
  const [inputRemetente, setInputRemetente] = useState("")
  const [inputMensagem, setInputMensagem] = useState("")
  const [conversa, setConversa] = useState([

  ])

  const handleInputRemetente = (e) => {
    setInputRemetente(e.target.value)
  }

  const handleInputMensagem = (e) => {
    setInputMensagem(e.target.value)
  }

  const iniciarConversa = (e) => {

    const iniciarConversa = {remetente: inputRemetente, mensagem: inputMensagem}
    const novaConversa = [iniciarConversa]
    setConversa(novaConversa)
  }

  const chat = conversa.map((mensagem, index) => {
    return (
      <Chat key={index}>
        {mensagem.remetente} 
        {mensagem.mensagem}
      </Chat>
    )
  })

  return (
    <div>
      <Comeco>
        <Imagem src={logotipo}/>
        <h1>WhatsLab</h1>
      </Comeco>
      <Container>
        <Direito/>
        <Meio>
            <Escreve placeholder="Remetente:"
            value={inputRemetente}
            onChange={handleInputRemetente} 
            />
            <Escreve2 placeholder="Msg:"
            value={inputMensagem}
            onChange={handleInputMensagem}
            />
            <Botao onClick={iniciarConversa}>Envia Mensagem</Botao>
        </Meio>
            {chat}
        <Esquerdo/>
      </Container>
      <Rodape>
        <p>Copyright © 2022 Vinício All rights reserved R. Pedro Alvares Cabral, 1500, Vila Nova CEP 15896-000 </p>
      </Rodape>
    </div>
  );
}
console.log(App)

export default App;
