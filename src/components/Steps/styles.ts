import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    cursor: default;
`;

export const StepBox = styled.span`
    padding: 1rem 3rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.grey};
    font-size: ${(props) => props.theme.fontStyles.fontSize};
`;
