import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/Reset";
import theme from "./styles/theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <h1>OI</h1>
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default App;
