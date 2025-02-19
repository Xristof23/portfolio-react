import { Headline1, StandardParagraph } from "@/sharedStyledComponents";
import styled from "styled-components"

const StyledMain = styled.main`
    color: #fcfffc;
    margin: 0.5rem;
    padding: 0.25rem;
    border: 1px solid darkorange;
    `;

export default function MainContainer() {
  
    return (
        <StyledMain>
         <Headline1>About this</Headline1>
        <StandardParagraph>
          This portfolio ....
        </StandardParagraph>
   
        </StyledMain>
    );
}