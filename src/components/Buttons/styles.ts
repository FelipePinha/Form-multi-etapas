import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 0.4rem;
`;

export const Button = styled.button`
    background-color: ${(props) => props.theme.colors.blue};
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 1rem;
    padding: 1.6rem 4rem;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover {
        filter: brightness(1.1);
    }
`;
