import styled from "styled-components";

export const ListaDoCarrinho = styled.ul`
    display: flex;
    flex-direction: column;
`

export const ItensDoCarrinho = styled.li`
    display: flex;
    flex-direction: row;
    gap: 1rem;
`
export const Botao = styled.button`
    cursor: pointer;
    border: 2px solid #fff;
    align-self: center;
    width: 10rem;
    border-radius: 5px;
    background-color: #1771E6;
    transition: all 0.3s ease;
    :hover{
        font-weight: 700;
        background-color: #0A3266;
    }
    :active{
        scale: 0.9;
    }
`
