import { StandardArticle, StandardParagraph, StandardLink, Headline2, FlexRowWrapper } from "@/sharedStyledComponents";
import Button from "./Button";
import styled from "styled-components";

const ButtonLikeLink = styled(StandardLink)`
color: black;
text-align: center;
font-size: 1.1rem;
line-height: 1.1rem;
font-weight: 500; 
margin: 0.5rem;
padding: 0.3rem;
width: ${({ $width }) => $width ? `${$width}px` : "5rem"};
background-color: ${({ $color }) => $color? $color : "#fcfffc"};
min-width: fit-content;
height: 2rem;
border-radius: 4px;
`;

export default function ProjectCard({ project }) {
    const { title, shortDescription, url } = project;
   
    return (
        <StandardArticle>
            <Headline2>{title}</Headline2>
            <StandardParagraph>{shortDescription}</StandardParagraph>
            <FlexRowWrapper>
                {/* <Button text="show details" /> */}
               {url && <ButtonLikeLink $width={220}  href={url} title="Check this out!" >visit {title} website</ButtonLikeLink>}
            </FlexRowWrapper>
        
        </StandardArticle>)
} 