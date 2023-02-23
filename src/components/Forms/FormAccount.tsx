import * as C from "./styles";

export const FormAccount = () => {
    return (
        <C.Container>
            <h2>Informações da conta</h2>
            <C.FieldWrapper>
                <C.Label>Email</C.Label>
                <C.Input type="text" placeholder="insira seu email" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>Senha</C.Label>
                <C.Input type="password" placeholder="digite sua senha" />
            </C.FieldWrapper>
        </C.Container>
    );
};
