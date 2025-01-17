import Imagem from "../Galeria/Imagem"
import { styled } from "styled-components"
import BotaoIcone from "/icones/fechar.png"

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const Dialog = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1156px;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            background: transparent;
            border: 0;
        }
    }
`

const ModalZoom = ({ foto, aoFechar ,aoAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay />
                <Dialog open={!!foto}>
                    <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
                    <form method="dialog">
                        <button onClick={aoFechar}><img src={BotaoIcone} /></button>
                    </form>
                </Dialog>
            </>}
        </>
    )
}

export default ModalZoom