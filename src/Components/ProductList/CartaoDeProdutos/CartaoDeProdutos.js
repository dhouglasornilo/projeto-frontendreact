import { Container, Imagem, Informacoes, Botao } from "./CartaoDeProdutosStyle"

export default function CartaoDeProdutos(props) {

    return (
        <Container>
            <Imagem src={props.produto.imageUrl} alt="produto" />
            <Informacoes>{props.produto.nome}</Informacoes>
            <Informacoes>R${props.produto.valor}</Informacoes>
            <Botao onClick={()=>(props.adicionarItemNoCarrinho())}>Adicionar ao Carrinho</Botao>
        </Container>
    )
}