import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import perfil1 from './img/perfil1.png'
import perfil2 from './img/perfil2.png'
import foto1 from './img/foto1.webp'
import foto2 from './img/foto2.jpg'



function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post 
          nomeUsuario={'pati'}
          fotoUsuario={perfil1}
          fotoPost={foto1}
          />

          <Post 
          nomeUsuario={'gui'}
          fotoUsuario={perfil2}
          fotoPost={foto2}
          />
  </div>
)

}


export default App;
