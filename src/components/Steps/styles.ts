import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    cursor: default;
`;

interface SetpBoxProps {
    stepSelected: boolean;
}

export const StepBox = styled.span<SetpBoxProps>`
    padding: 1rem 3rem;
    border-radius: 1rem;
    color: ${(props) =>
        props.stepSelected ? props.theme.colors.white : "#000"};

    background-color: ${(props) =>
        props.stepSelected ? props.theme.colors.blue : props.theme.colors.grey};

    font-size: ${(props) => props.theme.fontStyles.fontSize};
    transform: scale(${(props) => (props.stepSelected ? "1.2" : "")});

    transition: all 0.1s ease-in-out;
`;
