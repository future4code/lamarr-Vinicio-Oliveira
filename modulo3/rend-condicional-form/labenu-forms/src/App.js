import { useState } from 'react'
import './App.css';
import Formulario1 from './Components/Formulario1';
import Formulario2 from './Components/Formulario2';
import Formulario3 from './Components/Formulario3';
import Agradecimento from './Components/Agradecimento';


function App() {

  const [section, setSection] = useState(1);

  function renderizaEtapa () {
    switch(section) {
      case 1:
        return (<Formulario1/>);
        break;
      case 2:
        return (<Formulario2/>);
        break;
      case 3:
        return (<Formulario3/>);
        break;
      case 4:
        return (<Agradecimento/>);
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      {renderizaEtapa()}
      <br/>
      {section < 4 ? (<button onClick={() => setSection(section + 1)}>Próxima etapa</button>) : null}
    </div>
  );
}
export default App;