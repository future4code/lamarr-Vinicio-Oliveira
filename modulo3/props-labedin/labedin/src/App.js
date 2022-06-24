import React from 'react';
import minhaFoto from './imagem/Vinicio.PNG'
import trabalho from './imagem/zilor.png'
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import CardPequeno2 from './components/CardPequeno2/CardPequeno2'
import ImagemButton from './components/ImagemButton/ImagemButton';
import email from './imagem/email.png'
import endereco from './imagem/endereco.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={minhaFoto} 
          nome="Vinício Oliveira" 
          descricao="Oi, eu sou o Vinício."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="pequeno">
        <CardPequeno
        imagem={email}
        email={"vinicio.futebol@gmail.com"}
        /> 
      </div>

      <div> 
     
        <CardPequeno2
        imagem={endereco}
        endereco={"Rua 10"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso de Programação Web Full Stack!" 
        />
        
        <CardGrande 
          imagem={trabalho} 
          nome="Zilor" 
          descricao="Empresa onde completei 10 anos de serviços prestados." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
