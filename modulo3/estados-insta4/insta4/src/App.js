import React from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style'


function App() {
  const arrayInsta = [
    {
      nomeUsuario: 'Paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Pati',
      fotoUsuario: 'https://picsum.photos/51',
      fotoPost: 'https://picsum.photos/200/152'      
    },
    {
      nomeUsuario: 'Gui',
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
  <MainContainer>
      {arrayPosts}   
  </MainContainer>
)

}


export default App;
