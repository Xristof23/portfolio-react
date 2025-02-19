import { Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel, StandardArticle } from "@/sharedStyledComponents";

export default function Contact() {
    return (
        <StandardArticle>
            <Headline1>Contact</Headline1>
            <StandardParagraph>If you want to contact me ..</StandardParagraph>
            <StandardLabel>Your name</StandardLabel>
                <StyledInput id="your-name" name="your-name"/>
            <br/>
            <StandardLabel htmlfor="e-mail">E-Mail</StandardLabel>
                <StyledInput id="e-mail" name="e-mail"/>
            <br/>
            <StandardButton type="submit" onClick={() => console.log("pressed submit")}>
         submit
            </StandardButton>
        </StandardArticle>
    )
}