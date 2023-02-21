import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Reset";
import theme from "./styles/theme";
import { Buttons } from "./components/Buttons/Buttons";
import { Form } from "./components/Form/Form";
import { Steps } from "./components/Steps/Steps";

import { StepsProvider } from "./contexts/stepsContext";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StepsProvider>
                <Form>
                    <Steps />
                    <Buttons />
                </Form>
            </StepsProvider>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
