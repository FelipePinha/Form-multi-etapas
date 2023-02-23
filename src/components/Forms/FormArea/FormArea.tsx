import useSteps from "../../../hooks/useSteps";
import { FormAccount } from "../FormAccount";
import { FormAddress } from "../FormAddress";
import { FormPersonalDetails } from "../FormPersonalDetails";

export const FormArea = () => {
    const { step } = useSteps();

    const getFormComponents = () => {
        switch (step) {
            case 1:
                return <FormAccount />;
            case 2:
                return <FormPersonalDetails />;
            case 3:
                return <FormAddress />;
            default:
                return <FormAccount />;
        }
    };

    return <>{getFormComponents()}</>;
};
