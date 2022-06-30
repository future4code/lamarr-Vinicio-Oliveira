import './App.css';
import logotipo from './img/foguinho.jpg'
import styled from 'styled-components'

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
  width: 200px;
  background-color: orange;
`

const Meio = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 560px 0 20px 0;
  margin-left: 30px;
 // background-color: lightgray;
`
const Escreve = styled.input`
  margin-right: 10px;
  width: 180px;
`

const Escreve2 = styled.input`
  width: 500px;
`


const Botao = styled.button`
  margin-left: 15px;
`

const Esquerdo = styled.aside`
  width: 200px;
  height: 600px;
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
  return (
    <div>
      <Comeco>
        <Imagem src={logotipo}/>
        <h1>WhatsLab</h1>
      </Comeco>
      <Container>
        <Direito>

        </Direito>
        <Meio>
            <Escreve placeholder="Remetente:" />

            <Escreve2 placeholder="Msg:" />

            <Botao>Envia Mensagem</Botao>
         
        </Meio>
        <Esquerdo>

        </Esquerdo>
      </Container>
      <Rodape>
        <p>Copyright © 2022 Vinício All rights reserved R. Pedro Alvares Cabral, 1500, Vila Nova CEP 15896-000 </p>
      </Rodape>
      

    </div>

  );
}

export default App;
