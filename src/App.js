import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Filtro from './Components/Filters/Filter'
import Home from './Components/ProductList/Home/Home'
import Carrinho from './Components/ShoppingCart/Carrinho/Carrinho'
import { Main, GlobalStyled } from './GlobalStyled'
import { ListaDeProdutos } from './Assets/ListaDeProdutos'
import { useState } from 'react'


function App() {

  const [filtroValorMin, setFiltroValorMin] = useState("")
  const [filtroValorMax, setFiltroValorMax] = useState("")
  const [buscaPorNome, setBuscaPorNome] = useState("")
  const [ordem, setOrdem] = useState("")
  const [carrinho, setCarrinho] = useState([])
  const [valorCarrinho, setValorCarrinho] = useState("")

  const listaFiltrada = ListaDeProdutos.filter((produto) => {
    const listaFiltrada = produto.valor >= filtroValorMin && produto.valor <= filtroValorMax
    const resulBuscaPorNome = produto.nome.toLowerCase().includes(buscaPorNome.toLowerCase())
    if(filtroValorMin && filtroValorMax){
      return listaFiltrada && resulBuscaPorNome
    }else if(filtroValorMin){
      return produto.valor >= filtroValorMin && resulBuscaPorNome
    }else if(filtroValorMax){
      return produto.valor <= filtroValorMax && resulBuscaPorNome
    }else{
      return ListaDeProdutos && resulBuscaPorNome
    }
  })

  return (
    <>
      <GlobalStyled />
      <div>
        <Header />
        <Main>
          <Filtro
            filtroValorMin={filtroValorMin}
            setFiltroValorMin={setFiltroValorMin}
            filtroValorMax={filtroValorMax}
            setFiltroValorMax={setFiltroValorMax}
            buscaPorNome={buscaPorNome}
            setBuscaPorNome={setBuscaPorNome}
          />
          <Home
            filtroValorMin={filtroValorMin}
            filtroValorMax={filtroValorMax}
            buscaPorNome={buscaPorNome}
            listaFiltrada={listaFiltrada}
            valorCarrinho={valorCarrinho}
            setValorCarrinho={setValorCarrinho}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            listaDeProdutos={ListaDeProdutos}
            ordem={ordem}
            setOrdem={setOrdem}
          />
          <Carrinho
            valorCarrinho={valorCarrinho}
            setValorCarrinho={setValorCarrinho}
            carrinho={carrinho}
            setCarrinho={setCarrinho}
            listaDeProdutos={ListaDeProdutos}
          />
        </Main>
        <Footer />
      </div>
    </>
  )
}

export default App
