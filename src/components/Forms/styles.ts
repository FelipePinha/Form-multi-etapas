import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }
`;

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
`;

export const Label = styled.label`
    font-size: 1.4rem;
`;

export const Input = styled.input`
    width: 100%;
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.blue};
    border-radius: 0.5rem;
    padding: 1.6rem 1.5rem;
    font-size: 1.6rem;
    background-color: ${(props) => props.theme.colors.bg_body};
`;
