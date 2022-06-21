// import logo from './logo.svg';

import logoLabenu from './imagem/labenu.png'
import './App.css';

function App() {
  function mensagem() {
    alert("Boa noite!")
  }
  return (
    <div className="App">
        <h1>Olá! Eu sou a Labenu!</h1>
        <img className="imagem" src={logoLabenu} alt="Logo Labenu" />
        <p>Este é meu primeiro site React</p>
        <button onClick={mensagem}>Aperte este botão</button>
    </div>
  );
}

export default App;
