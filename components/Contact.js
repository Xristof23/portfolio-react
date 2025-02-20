import { Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel, StandardArticle, ButtonContainer } from "@/sharedStyledComponents";
import Button from "./Button";
import { useState } from "react";

export default function Contact() {
    const [contactIsShown, setContactIsShown] = useState(false)
    return (
        <StandardArticle>
            <ButtonContainer>
                <Button activeColor={"darkorange"} isActive={contactIsShown} text="contact" buttonFunction={setContactIsShown} argument={!contactIsShown} toggle />
            </ButtonContainer>
            {contactIsShown &&
                <div><Headline1>Contact</Headline1>
                <StandardParagraph>If you want to contact me ... contact form coming soon, before soon you can write to:</StandardParagraph>
                <StandardParagraph>freenoise at gmx dot de</StandardParagraph>
                {/* <form>
                    <StandardLabel htmlFor="your-name">Your name</StandardLabel>
                    <StyledInput id="your-name" name="your-name" />
                    <br />
                    <StandardLabel htmlFor="e-mail">E-Mail</StandardLabel>
                    <StyledInput id="e-mail" name="e-mail" />
                    <br />
                    <StandardButton type="submit" onClick={() => console.log("pressed submit")}>
                        submit
                    </StandardButton>
                </form> */}
            </div>}
        </StandardArticle>
    )
}