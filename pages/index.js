
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import { useState } from "react";

export default function HomePage() {
  const [whatIsShown, setWhatIsShown] = useState("projects");
  return (
    <>
      <Header whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown} />    
      <MainContainer whatIsShown={whatIsShown}>
      </MainContainer>
      <Footer setWhatIsShown={setWhatIsShown} />
    </>
  );
}
