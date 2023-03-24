import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
    width: 15rem;
    height: 22rem;
    border: 3px solid #fff;
    border-radius: 5px;
    background-color: #000;
    transition: all 0.3s ease;

    :hover{
        scale: 1.1;
    }
`

export const Imagem = styled.img`
    align-self: center;
    width: 100%;
`

export const Botao = styled.button`
    cursor: pointer;
    border: 2px solid #fff;
    align-self: center;
    height: 2rem;
    width: 12rem;
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

export const Informacoes = styled.p`
    text-align: center;
    
`