import { Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel } from "@/sharedStyledComponents";

export default function Contact() {
    return (
        <><Headline1>Contact</Headline1>
            <StandardParagraph></StandardParagraph>
            <StandardLabel>Write your comment
                <StyledInput></StyledInput>
            </StandardLabel>
            <StandardButton type="submit" onClick={() => console.log("pressed submit")}>
         submit
        </StandardButton>
            <StandardParagraph>Content Example</StandardParagraph>
            </>
    )
}