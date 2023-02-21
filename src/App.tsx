import { ThemeProvider } from "styled-components";
import { Buttons } from "./components/Buttons/Buttons";
import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./styles/Reset";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Form>
                <Buttons />
            </Form>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
