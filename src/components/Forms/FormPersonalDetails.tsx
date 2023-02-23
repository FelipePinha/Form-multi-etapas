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
                <C.Label>Idade</C.Label>
                <C.Input type="number" placeholder="digite sua Idade" />
            </C.FieldWrapper>
        </C.Container>
    );
};
