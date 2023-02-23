import * as C from "./styles";

export const FormPersonalDetails = () => {
    return (
        <C.Container>
            <h2>Informações pessoais</h2>
            <C.FieldWrapper>
                <C.Label>Nome</C.Label>
                <C.Input type="text" placeholder="digite seu nome" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>CPF</C.Label>
                <C.Input type="text" placeholder="digite seu CPF" />
            </C.FieldWrapper>
            <C.FieldWrapper>
                <C.Label>Celular</C.Label>
                <C.Input type="number" placeholder="digite seu Número" />
            </C.FieldWrapper>
        </C.Container>
    );
};
