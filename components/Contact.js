import { ButtonContainer, Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel, StandardArticle } from "@/sharedStyledComponents";
import Button from "./Button";
import { useState } from "react";

function handleSubmit(event) {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form");
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    const dateOfContact = new Date();

    const contactData = {name: data.name, email: date.email, dateOfContact};
    console.log(contactData);
    // event.target.reset();
    // event.target.elements.your-name.focus();
}


export default function Contact() {
    const [contactIsShown, setContactIsShown] = useState(false)

    return (
        <StandardArticle>
            <ButtonContainer>
                <Button activeColor={"darkorange"} isActive={contactIsShown} text="contact" buttonFunction={setContactIsShown} argument={!contactIsShown} toggle />
            </ButtonContainer>
            {contactIsShown &&
                <div><Headline1>Contact</Headline1>
                <StandardParagraph>If you want to contact me ... :</StandardParagraph>
                <StandardParagraph>freenoise at gmx dot de</StandardParagraph>
                <form id="contact-form">
                    <StandardLabel htmlFor="your-name">Your name*</StandardLabel>
                    <StyledInput id="name" name="name" type="text" required/>
                    <br />
                    <StandardLabel htmlFor="e-mail">E-Mail*</StandardLabel>
                    <StyledInput id="email" name="email" type="email" required />
                    <br />
                    <StandardLabel htmlFor="your-message">Your message*</StandardLabel>
                    <StyledInput id="message" name="message" type="text" required/>
                    <br />
                    <ButtonContainer>
                            <StandardButton onClick={handleSubmit} type="submit">submit</StandardButton>
                    </ButtonContainer>
                </form>
            </div>}
        </StandardArticle>
    )
}