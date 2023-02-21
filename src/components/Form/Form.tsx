import { ReactNode } from "react";
import * as C from "./styles";

interface FormProps {
    children: ReactNode;
}

export const Form = ({ children }: FormProps) => {
    return <C.Container>{children}</C.Container>;
};
