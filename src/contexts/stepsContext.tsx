import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

type StepsContextProps = {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    allSteps: number[];
};

const initialState = {
    step: 1,
    setStep: () => {},
    allSteps: [1, 2, 3],
};

export const StepsContext = createContext<StepsContextProps>(initialState);

interface StepsProviderProps {
    children: ReactNode;
}

export const StepsProvider = ({ children }: StepsProviderProps) => {
    const [step, setStep] = useState(1);
    const allSteps = [1, 2, 3];

    return (
        <StepsContext.Provider value={{ step, setStep, allSteps }}>
            {children}
        </StepsContext.Provider>
    );
};
