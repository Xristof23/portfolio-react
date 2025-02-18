
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Headline1, StandardParagraph } from "@/sharedStyledComponents";
import styled from "styled-components";

const MainSection = styled.section`
background-color: black;
`;

export default function HomePage() {
  return (
    <>
      <Header />    
      <MainSection>
        <Headline1>About this</Headline1>
        <StandardParagraph>
          This portfolio ....
        </StandardParagraph>
        <StandardParagraph>
       Bla1
        </StandardParagraph>
  
        <Contact/>
      </MainSection>
      <Footer/>
    </>
  );
}
