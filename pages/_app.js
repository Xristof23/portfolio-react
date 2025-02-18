import { useState } from "react";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [whatIsShown, setWhatISShown] = useState("news");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
