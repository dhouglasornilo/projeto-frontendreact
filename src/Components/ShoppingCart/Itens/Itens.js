import { Botao, ListaDoCarrinho, ItensDoCarrinho } from "./ItensStyle"

export default function Itens(props) {

    const valorTotalDoCarrinho = props.item.valor * props.item.quantidade;

    return (
        <ListaDoCarrinho>
            <ItensDoCarrinho >
                <p>{props.item.quantidade}x</p>
                <p>{props.item.nome}</p>
                <p>Valor Unitário: {props.item.valor}</p>
                <p>Valor Total: {valorTotalDoCarrinho}</p>
                <Botao onClick={props.removerUmItemCarrinho}>Remover Unidade</Botao>
                <Botao onClick={props.removerTodosItensCarrinho}>Remover Todos</Botao>
            </ItensDoCarrinho>
        </ListaDoCarrinho>
    )
}