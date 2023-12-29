import 'styled-components/native'


declare module 'styled-components/native' {
  export interface DefaultTheme {
    COLORS: {
      PRODUCT: {
        RED_DARK: string;
        RED_MID: string;
        RED_LIGHT: string;
        GREEN_DARK: string;
        GREEN_MID: string;
        GREEN_LIGHT: string;
      },
      BASE: {
        GRAY_1: string;
        GRAY_2: string;
        GRAY_3: string;
        GRAY_4: string;
        GRAY_5: string;
        GRAY_6: string;
        GRAY_7: string;
        WHITE: string;
      }
    },
    FONT_FAMILY: {
      REGULAR: string;
      BOLD: string;
    },
    FONT_SIZE: {
      SM: number;
      MD: number;
      LG: number;
      XL: number;
      XXL: number;
    }
  }
}