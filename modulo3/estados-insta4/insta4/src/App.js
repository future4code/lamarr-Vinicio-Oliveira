import React, { useState } from 'react'
import Post from './components/Post/Post';
import {MainContainer, Formulario} from './style'


function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputPerfil, setInputPerfil] = useState("")
  const [inputPostagem, setInputPostagem] = useState("")
  const [posts, setPosts] = useState([
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
  ])

  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }

  const handleInputPerfil = (e) => {
    setInputPerfil(e.target.value)
  }

  const handleInputPostagem = (e) => {
    setInputPostagem(e.target.value)
  }

  const addPostagem = (e) => {
    e.preventDefault();

    const novoPost = {nomeUsuario: inputNome, fotoUsuario: inputPerfil, fotoPost: inputPostagem}
    const novaListaPosts = [...posts, novoPost]
    setPosts(novaListaPosts)
  }

  const listaPosts = posts.map((post, index) => {
    const deletarPost = () => {
      const novaListaPosts = [...posts]
      const deletar = novaListaPosts.findIndex((postExcluido) => {
        return postExcluido === post
      })
      novaListaPosts.splice(deletar, 1)
      setPosts(novaListaPosts)
    }
    return (
      <section key={index}>
        <Post/>
        <p>{post.nomeUsuario}</p>
        <p>{post.fotoUsuario}</p>
        <p>{post.fotoPost}</p>
        <button onClick={deletarPost}>x</button>
      </section>
    )
  })

  

 /* const arrayPosts = arrayInsta.map((elemento, index) => {
    return <Post key={index}
    nomeUsuario={elemento.nomeUsuario}
    fotoUsuario={elemento.fotoUsuario}
    fotoPost={elemento.fotoPost}></Post>
  }) */

return(
  <div>
    <Formulario>
      <label>Nome de usuário: </label>
      <input
        placeholder='Insira nome de usuário'
        value={inputNome}
        onChange={handleInputNome}
        />
      <label>Foto de perfil: </label>
      <input
        placeholder='Link da foto de perfil'
        value={inputPerfil}
        onChange={handleInputPerfil}
        />
      <label>Foto que deseja postar: </label>
      <input
        placeholder='Link foto para postagem'
        value={inputPostagem}
        onChange={handleInputPostagem}
        />
      <button onClick={addPostagem}>Postar</button>
    </Formulario> 
    <MainContainer>
    {listaPosts}
    </MainContainer>
  </div>
)

}


export default App;
