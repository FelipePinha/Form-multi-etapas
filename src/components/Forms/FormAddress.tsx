import * as C from "./styles";

export const FormAddress = () => {
    return (
        <C.Container>
            <h2>Endereço</h2>
            <C.FieldWrapper>
                <C.Label>País</C.Label>
                <C.Input type="text" placeholder="insira seu email" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>Cidade</C.Label>
                <C.Input type="text" placeholder="insira sua cidade" />
            </C.FieldWrapper>
        </C.Container>
    );
};
