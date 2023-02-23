import * as C from "./styles";

export const FormAddress = () => {
    return (
        <C.Container>
            <h2>Endereço</h2>
            <C.FieldWrapper>
                <C.Label>Cidade</C.Label>
                <C.Input type="text" placeholder="Cidade, UF" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>Rua</C.Label>
                <C.Input type="text" placeholder="insira sua rua" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>CEP</C.Label>
                <C.Input type="text" placeholder="insira seu CEP" />
            </C.FieldWrapper>
        </C.Container>
    );
};
