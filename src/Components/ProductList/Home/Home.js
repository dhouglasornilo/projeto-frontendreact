import CartaoDeProdutos from "../CartaoDeProdutos/CartaoDeProdutos"
import { HomeStyle, Ordem, CartaoDeProdutosStyle, Lista, Selecoes } from "./HomeStyle"

export default function Home(props) {

    const adicionarItemNoCarrinho = (index) => {
        const itensExistentes = props.carrinho.findIndex(item => item.nome === props.listaDeProdutos[index].nome)

        if (itensExistentes !== -1) {
            const atualizarCarrinho = [...props.carrinho]
            atualizarCarrinho[itensExistentes].quantidade += 1
            props.setCarrinho(atualizarCarrinho)

            const valorTotal = atualizarCarrinho.reduce((acumulado, item) => acumulado + item.valor * item.quantidade, 0)
            props.setValorCarrinho(valorTotal)

        } else {
            const novoItem = {
                id: props.listaDeProdutos[index].id,
                nome: props.listaDeProdutos[index].nome,
                valor: props.listaDeProdutos[index].valor,
                quantidade: 1
            }

            const atualizarCarrinho = [...props.carrinho, novoItem]
            props.setCarrinho(atualizarCarrinho)

            const valorTotal = atualizarCarrinho.reduce((acumulado, item) => acumulado + item.valor * item.quantidade, 0)

            props.setValorCarrinho(valorTotal)
        }
    }

    return (
        <HomeStyle>
            <Ordem>
                <p>Quantidade de produtos: {props.listaDeProdutos.length}</p>
                <p>Ordem: 
                    <Selecoes onChange={(e)=>props.setOrdem(e.target.value)}>
                        <option value={""}>Galáctica</option>
                        <option value={"alfa-crescente"}>A-Z</option>
                        <option value={"alfa-decrescente"}>Z-A</option>
                        <option value={"num-crescente"}>Menor Valor</option>
                        <option value={"num-decrescente"}>Maior Valor</option>
                    </Selecoes>
                </p>
            </Ordem>
            <CartaoDeProdutosStyle>
                <Lista>
                    {props.listaFiltrada.sort((a, b) => {
                        if (props.ordem === "alfa-crescente") {
                            return a.nome.localeCompare(b.nome)
                        }
                        if (props.ordem === "alfa-decrescente") {
                            return b.nome.localeCompare(a.nome)
                        }
                        if (props.ordem === "num-crescente") {
                            return a.valor - b.valor
                        }
                        if (props.ordem === "num-decrescente") {
                            return b.valor - a.valor
                        }
                    })
                    .map((produto, index) => {
                        return (
                    <CartaoDeProdutos
                        key={index}
                        produto={produto}
                        adicionarItemNoCarrinho={() => adicionarItemNoCarrinho(index)} />
                    )
                    })}
                </Lista>
            </CartaoDeProdutosStyle>
        </HomeStyle>
    )

}