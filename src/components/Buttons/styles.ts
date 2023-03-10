import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 2.5rem;
`;

export const Button = styled.button`
    background-color: ${(props) =>
        props.disabled ? props.theme.colors.grey : props.theme.colors.blue};

    font-weight: ${(props) => props.theme.fontStyles.bold};
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 1rem;
    padding: 1.6rem 4rem;
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover {
        filter: ${(props) => (props.disabled ? "" : "brightness(1.1)")};
    }
`;
