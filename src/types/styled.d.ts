import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        fontStyles: {
            fontFamily: string;
            fontSize: string;
        };
        colors: {
            blue: string;
            white: string;
            grey: string;
        };
    }
}
