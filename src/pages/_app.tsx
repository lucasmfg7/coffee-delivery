import { Header } from "@/components/header";
import { defaultTheme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "styled-components";

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
