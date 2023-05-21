import {useState} from "react";
import { FormContainer,Form,Input,StyledLabel,Button } from "./styled";

export const FormularioCadastro = (props)=>{
    const[imagem, setImagem] = useState('')
    const[descricao,setDescricao] = useState('')
    
    const trocaimagem= (event)=>{
        console.log(event.target.value);
        setImagem(event.target.value)
    }
    const trocadescricao=(event)=>{
        console.log(event.target.value)
        setDescricao(event.target.value)
    }

    const novoPost=(e)=>{
        e.preventDefault()
        const novoPostObjeto={
            imagem:imagem,
            descricao:descricao
        }
        props.setPost(novoPostObjeto)
        setImagem('');
        setDescricao('');
    }

    return(
        <FormContainer>
            <h2>Insira sua postagem abaixo:</h2>
            <Form onSubmit={novoPost}>
                <StyledLabel htmlFor="foto">
                    Imagem:
                    <Input id="foto" value={imagem} onChange={trocaimagem}/>
                </StyledLabel>
                <StyledLabel htmlFor="descricao">
                    Descrição:
                    <Input id="descricao" value={descricao} onChange={trocadescricao}/>
                </StyledLabel>
                <Button onClick={()=> novoPost}>Postar</Button>
            </Form>
        </FormContainer>
    )
}