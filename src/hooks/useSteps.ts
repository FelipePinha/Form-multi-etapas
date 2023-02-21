import { useContext } from "react";
import { StepsContext } from "../contexts/stepsContext";

const useSteps = () => {
    const context = useContext(StepsContext);

    return context;
};

export default useSteps;
