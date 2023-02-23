import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Reset";
import theme from "./styles/theme";
import { Buttons } from "./components/Buttons/Buttons";
import { FormBox } from "./components/FormBox/FormBox";
import { Steps } from "./components/Steps/Steps";
import { FormArea } from "./components/Forms/FormArea/FormArea";

import { StepsProvider } from "./contexts/stepsContext";
import { Line } from "./styles/Line";
import useSteps from "./hooks/useSteps";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <StepsProvider>
                <FormBox>
                    <Steps />
                    <Line />
                    <FormArea />
                    <Buttons />
                </FormBox>
            </StepsProvider>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
