import Itens from "../Itens/Itens"
import { CarrinhoStyle, ValorCarrinho } from "./CarrinhoStyle"

export default function Carrinho(props) {

    const removerTodosItensCarrinho = (index) => {
        const listaFiltrada = props.carrinho.filter((item, i) => i !== index)
        const valorTotal = listaFiltrada.reduce((acumulado, item) => acumulado + item.valor * item.quantidade, 0)
        props.setCarrinho(listaFiltrada);
        props.setValorCarrinho(valorTotal);
    }

    const removerUmItemCarrinho = (index) => {
        const carrinhoAtualizado = [...props.carrinho];
        carrinhoAtualizado[index].quantidade--;
        if (carrinhoAtualizado[index].quantidade === 0) {
            carrinhoAtualizado.splice(index, 1)
        }
        const valorTotal = carrinhoAtualizado.reduce((acumulado, item) => acumulado + item.valor * item.quantidade, 0)
        props.setCarrinho(carrinhoAtualizado);
        props.setValorCarrinho(valorTotal);
    }

    const itensCarrinho = props.carrinho.map((item, index) => {

        return (
            <Itens
                key={index}
                listaDeProdutos={props.listaDeProdutos}
                removerTodosItensCarrinho={() => removerTodosItensCarrinho(index)}
                removerUmItemCarrinho={() => removerUmItemCarrinho(index)}
                item={item}
                carrinho={props.carrinho}
                setCarrinho={props.setCarrinho} />
                )
            })
            
            const valorTotal = Number(props.valorCarrinho)

    return (
        <CarrinhoStyle>
            <h1>Carrinho</h1>
            {itensCarrinho}
            <ValorCarrinho>
                Valor total: R${valorTotal.toFixed(2)}
            </ValorCarrinho>
        </CarrinhoStyle>
    )

}