import { Headline1, StandardParagraph } from "@/sharedStyledComponents";
import styled from "styled-components"
import ProjectList from "./ProjectList";
import { projectList } from "@/contentData";

const StyledMain = styled.main`
    color: #fcfffc;
    margin: 0.5rem;
    padding: 0.25rem;
    `;

export default function MainContainer({ whatIsShown }) {
  console.log("whatisshown(Maincontainer): ", whatIsShown)
    return (
        <StyledMain>
         <Headline1>{whatIsShown === "projects"? "Projects" : "About this"}</Headline1>
            {whatIsShown === "about" && <StandardParagraph>
                This portfolio ....
            </StandardParagraph>}
            {whatIsShown === "projects" && <ProjectList list={projectList} />}
  
        </StyledMain>
    );
}