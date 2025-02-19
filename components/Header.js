import {
  ButtonContainer,
  FlexRowWrapper,
} from "@/sharedStyledComponents";
import Button from "./Button";
import styled from "styled-components";

const NavButtonContainer = styled(ButtonContainer)`
  margin-top: 0.7rem;`;

const CRHeader = styled.h1` 
  color: darkorange;
  top: -2rem;
  font-size: 2.5rem;
  font-weight: 800; 
  margin: 0rem .4rem .4rem;
  padding: .2rem;
`;

export default function Header() {
  
  return (
    <FlexRowWrapper>
      <CRHeader>CR</CRHeader>
      <NavButtonContainer>
        <Button text="news"/>
        <Button text="projects" />
        <Button text="about" />
        <Button text="me"/>
      </NavButtonContainer>
 
    </FlexRowWrapper>
  );
}
