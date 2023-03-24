import { Input, FiltrosStyle } from "./FilterStyle"

export default function Filtro(props) {

    return (
        <FiltrosStyle>
            <h1>Filtro</h1>
            <p>Valor mínimo:</p>
            <Input
                value={props.filtroValorMin}
                onChange={(e) => props.setFiltroValorMin(e.target.value)}
            />
            <p>Valor máximo:</p>
            <Input
                value={props.filtroValorMax}
                onChange={(e) => props.setFiltroValorMax(e.target.value)}
            />
            <p>Busca por nome:</p>
            <Input
                value={props.buscaPorNome}
                onChange={(e) => props.setBuscaPorNome(e.target.value)}
            />
        </FiltrosStyle>
    )

}