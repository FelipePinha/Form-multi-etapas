import { ReactNode } from "react";
import * as C from "./styles";

interface FormProps {
    children: ReactNode;
}

export const FormBox = ({ children }: FormProps) => {
    return <C.Container>{children}</C.Container>;
};
