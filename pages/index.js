
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { Headline1, StandardParagraph } from "@/sharedStyledComponents";
import { useState } from "react";

export default function HomePage() {
  const [whatIsShown, setWhatIsShown] = useState("projects");
  return (
    <>
      <Header whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown} />    
      <MainContainer whatIsShown={whatIsShown}>
        <Headline1>About this</Headline1>
        <StandardParagraph>
          This portfolio ....
        </StandardParagraph>
      </MainContainer>
      <Footer/>
    </>
  );
}
