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
  top: -1.8rem;
  font-size: 2.5rem;
  font-weight: 700; 
  margin: 0rem 0.8rem .4rem;
  padding: .2rem;
`;

export default function Header({whatIsShown, setWhatIsShown}) {
  
  return (
    <FlexRowWrapper>
      <CRHeader>CR</CRHeader>
      <NavButtonContainer>
        <Button isActive={whatIsShown === "news" ? true : false} text="news" whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown}/>
        <Button isActive={whatIsShown === "projects" ? true : false} text="projects" whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown} />
        <Button isActive={whatIsShown === "about" ? true : false} text="about" whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown}/>
        <Button isActive={whatIsShown === "me" ? true : false} text="me" whatIsShown={whatIsShown} setWhatIsShown={setWhatIsShown} />
      </NavButtonContainer>
 
    </FlexRowWrapper>
  );
}
