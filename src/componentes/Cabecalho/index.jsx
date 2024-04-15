import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
`

const Cabecalho = ({setFiltro}) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="" />
            <CampoTexto setFiltro={setFiltro}/>
        </HeaderEstilizado>
    )
}

export default Cabecalho