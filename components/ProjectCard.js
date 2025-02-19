import { StandardParagraph, StandardLink, Headline2, FlexRowWrapper } from "@/sharedStyledComponents";
import Button from "./Button";
import styled from "styled-components";

const ButtonLikeLink = styled(StandardLink)`
color: black;
text-align: center;
font-size: 1.1rem;
line-height: 1.1rem;
font-weight: 500; 
margin: 0.3rem;
padding: 0.3rem;
width: ${({ $width }) => $width ? `${$width}px` : "5rem"};
background-color: ${({ $color }) => $color? $color : "#fcfffc"};
min-width: fit-content;
height: 2rem;
border-radius: 4px;
`;

const StandardArticle = styled.article`
    background-color: #111111;
    border-radius: 8px;
    padding: 0.25rem;
    margin: 0.5rem 0.25rem;
    `;

export default function ProjectCard({ project }) {
    const { title, shortDescription, url } = project;
   
    return (
        <StandardArticle>
            <Headline2>{title}</Headline2>
            <StandardParagraph>{shortDescription}</StandardParagraph>
            <FlexRowWrapper>
                <Button text="show details" />
                <ButtonLikeLink href={url} title="Check this out" >visit {title} website</ButtonLikeLink>
            </FlexRowWrapper>
        
        
        {/* <a class="content_link" href=${url}  >visit ${title} website</a> */}
        </StandardArticle>)
} 