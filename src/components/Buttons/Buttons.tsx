import { SetStateAction, Dispatch } from "react";
import useSteps from "../../hooks/useSteps";
import * as C from "./styles";

export const Buttons = () => {
    const { step, setStep } = useSteps();

    const handleBackStep = () => {
        if (step === 1) {
            return;
        } else {
            setStep((prev) => prev - 1);
        }
    };

    const handleAdvanceStep = () => {
        if (step === 3) {
            return;
        } else {
            setStep((prev) => prev + 1);
        }
    };

    return (
        <C.Container>
            <C.Button disabled={step === 1} onClick={handleBackStep}>
                Voltar
            </C.Button>
            <C.Button onClick={handleAdvanceStep}>
                {step === 3 ? "Enviar" : "Avançar"}
            </C.Button>
        </C.Container>
    );
};
