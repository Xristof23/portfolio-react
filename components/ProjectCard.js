import { ButtonContainer, StandardArticle, StandardParagraph, Headline2, FlexRowWrapper, ButtonLikeLink } from "@/sharedStyledComponents";
import Button from "./Button";
import { useState } from "react";
import SimpleList from "./SimpleList";

export default function ProjectCard({ project }) {
    const { date, description, description2, featureList, projectName,  title, shortDescription, url } = project;
    const [showDetails, setShowDetails]  = useState(false);

    return (
        <StandardArticle>
            <Headline2>{date && date} {title}</Headline2>
            <StandardParagraph>{shortDescription}</StandardParagraph>
            {showDetails && <>
                <StandardParagraph>{description}</StandardParagraph>
                {description2 && <StandardParagraph>{description2}</StandardParagraph>}
                {featureList && <SimpleList array={featureList} />}
            </>}
            <ButtonContainer>
                <Button activeColor={"darkorange"} isActive={showDetails} text="details"  buttonFunction={setShowDetails} argument={!showDetails} toggle />
               {url && <ButtonLikeLink $width={230}  href={url} title="Check this out!" >visit &quot;{projectName? projectName: title}&quot;</ButtonLikeLink>}
            </ButtonContainer>
        
        </StandardArticle>)
} 