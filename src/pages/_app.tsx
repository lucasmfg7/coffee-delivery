import { Roboto } from "next/font/google";
import { Header } from "@/components";
import { defaultTheme } from "@/styles";
import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className={roboto.className}>
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
