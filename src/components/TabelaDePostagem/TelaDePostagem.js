import {ContainerPostagem,Image,Description} from "./styled"
import React from "react";

const TelaDePostagem =({imagem,descricao})=>{
    return(
        <ContainerPostagem>
            <Image src={imagem} width="100%" height="80%"  alt={"drove veiw"}/>
            <Description>{descricao}</Description>
        </ContainerPostagem>
    )
}
export default TelaDePostagem