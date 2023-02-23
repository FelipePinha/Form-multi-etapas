import styled from "styled-components";

export const Container = styled.section`
    margin: 50px auto;
    height: 80vh;
    max-width: 450px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem;

    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.2);
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.white};
`;
