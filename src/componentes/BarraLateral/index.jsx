import {styled} from "styled-components"
import ItemNav from "./ItemNav"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    <ItemNav
                        iconeAtivo="/icones/home-ativo.png" 
                        iconeInativo="/icones/home-inativo.png"
                        ativo
                    >
                        Inicio
                    </ItemNav>
                    <ItemNav 
                        iconeAtivo="/icones/mais-vistas-ativo.png" 
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais Vistas
                    </ItemNav>
                    <ItemNav 
                        iconeAtivo="/icones/mais-curtidas-ativo.png" 
                        iconeInativo="/icones/mais-curtidas-inativo.png"
                    >
                        Mais Curtidas
                    </ItemNav>
                    <ItemNav 
                        iconeAtivo="/icones/novas-ativo.png" 
                        iconeInativo="/icones/novas-inativo.png"
                    >
                        Novas
                    </ItemNav>
                    <ItemNav 
                        iconeAtivo="/icones/surpreenda-me-ativo.png" 
                        iconeInativo="/icones/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </ItemNav>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral