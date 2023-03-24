import styled from "styled-components";

export const HomeStyle = styled.div`
    padding: 1rem;
    width: 20vw;
    height: 90vh;
    flex-grow: 1;
`

export const Ordem = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const CartaoDeProdutosStyle = styled.li`
    display: flex;
`

export const Lista = styled.ul`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
`

export const Selecoes = styled.select`
    outline: none;
    border: 3px solid #fff;
    border-radius: 5px;
    background-color: #000;
`