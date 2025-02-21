import styled from "styled-components"
import ProjectList from "./ProjectList";
import { aboutContent, meContent, projectList, newsList } from "@/contentData";
import Article from "./Article";
import Contact from "./Contact";


const StyledMain = styled.main`
    color: #fcfffc;
    margin: 0.5rem;
    padding: 0.25rem;
    `;

export default function MainContainer({ whatIsShown }) {
  
    return (
        <StyledMain>
            {whatIsShown === "news" && <ProjectList newsMode list={newsList} />}
            {whatIsShown === "projects" && <ProjectList list={projectList} />}
            {whatIsShown === "about" && <Article content={aboutContent} />}
            {whatIsShown === "me" && <Article content={meContent} />}
            {whatIsShown === "me" && <Contact />}
        </StyledMain>
    );
}