import useSteps from "../../hooks/useSteps";
import * as C from "./styles";

export const Steps = () => {
    const { allSteps, step } = useSteps();

    return (
        <C.Container>
            {allSteps.map((item, index) => {
                return (
                    <C.StepBox stepSelected={step === item} key={index}>
                        {item}
                    </C.StepBox>
                );
            })}
        </C.Container>
    );
};
