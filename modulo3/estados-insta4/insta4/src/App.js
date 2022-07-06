import React from 'react';
import Post from './components/Post/Post';
import './style.css'
import perfil1 from './img/perfil1.png'
import perfil2 from './img/perfil2.png'
import foto1 from './img/foto1.webp'
import foto2 from './img/foto2.jpg'


function App() {
  const arrayInsta = [
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'pati',
      fotoUsuario: 'https://picsum.photos/51',
      fotoPost: 'https://picsum.photos/200/152'      
    },
    {
      nomeUsuario: 'gui',
      fotoUsuario: 'https://picsum.photos/50',
      fotoPost: 'https://picsum.photos/200/151',
    }
  ]

  const arrayPosts = arrayInsta.map((elemento, index) => {
    return <Post key={index}
    nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}></Post>
  })
return(
  <div className='MainContainer'>
      {arrayPosts}   
  </div>
)

}


export default App;
