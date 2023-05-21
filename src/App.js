import React, { useState } from "react";
import { FormularioCadastro } from "./components/FormularioCadastro/FormularioCadastro";
import Header from "./components/Header/Index";
import TelaDePostagem from "./components/TabelaDePostagem/TelaDePostagem";
import {Container,GlobalStyle} from "./GlobalStyle"

function App() {
  const [imagem, setImagem] = useState('')
  const [posts,setPosts] = useState({
    imagem:"",
    descricao:""
  })
  

  return (

    <Container>
      <GlobalStyle/>
      <aside>
        <Header/>
        <FormularioCadastro setPost={setPosts}/>
      </aside>
      <TelaDePostagem {...posts}/>
    </Container>
  );
}

export default App;
