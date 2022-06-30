import './App.css';
import logotipo from './img/foguinho.jpg'
import styled from 'styled-components'

const Comeco = styled.header`
  display: flex;
  justify-content: center;
`
const Imagem = styled.div`
  background-image: url({logotipo});
  width: 100px;
  height: 100px;
`

function App() {
  return (
    <Comeco>
      <Imagem backgroundImage={logotipo}/>
      <h1>WhatsLab</h1>
    </Comeco>
  );
}

export default App;
