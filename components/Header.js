import {
  ButtonContainer,
  FlexRowWrapper,
} from "@/sharedStyledComponents";
import Button from "./Button";
import styled from "styled-components";

const NavButtonContainer = styled(ButtonContainer)`
  margin: 0.7rem 0.25rem 0.5rem 0;
  gap: 0.1rem;
width: 80 %;
`;
const HeaderContainer = styled(FlexRowWrapper)`
margin: 0.5rem 0.5rem 0;

`;

const CRLogo = styled.h1` 
  color: darkorange;
  top: -1.8rem;
  font-size: 2.5rem;
  font-weight: 700; 
  margin: 0rem 0.4rem .4rem 0.4rem;
  padding: .2rem;
`;

export default function Header({whatIsShown, setWhatIsShown}) {

  return (
    <HeaderContainer>
      <CRLogo>CR</CRLogo>
      <NavButtonContainer>
        <Button activeColor={"darkorange"} isActive={whatIsShown === "news" ? true : false} text="news"  buttonFunction={setWhatIsShown} />
        <Button activeColor={"darkorange"} isActive={whatIsShown === "projects" ? true : false} text="projects" buttonFunction={setWhatIsShown}/>
        <Button activeColor={"darkorange"} isActive={whatIsShown === "about" ? true : false} text="about"  buttonFunction={setWhatIsShown}/>
        <Button activeColor={"darkorange"} isActive={whatIsShown === "me" ? true : false} text="me" buttonFunction={setWhatIsShown} />
      </NavButtonContainer>
    </HeaderContainer>
  );
}
