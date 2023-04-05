import { defaultTheme } from "@/styles/theme";
import "styled-components";

type MyThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends MyThemeType {}
}
