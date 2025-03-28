import { ButtonContainer, Headline1, StyledInput, StandardButton, StandardParagraph, StandardLabel, StandardArticle } from "@/sharedStyledComponents";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";

const ContactForm = styled.form`
    display: grid;
    grid-template-columns: 3fr 7fr;
    gap: 0;
     grid-template-rows: 1fr 1fr 5fr 1fr;
     height: 15rem;
     margin-left: 0.4rem;
`;

const MessageInput = styled(StyledInput)`
    height: 100%;
    border-radius: 6px;
    `;

const SubmittButton = styled(StandardButton)`
    margin-left: 0;
    width: 95%;
`;

function handleSubmit(event) {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form");
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    const dateOfContact = new Date();
    console.log(dateOfContact);
    const contactData = {name: data.name, email: date.email};
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
                <div>
                <StandardParagraph>If you want to contact me ... :</StandardParagraph>
                <ContactForm id="contact-form">
                    <StandardLabel htmlFor="your-name">Your name*</StandardLabel>
                    <StyledInput id="name" name="name" type="text" placeholder="Enter your name here" required/>
                   
                    <StandardLabel htmlFor="e-mail">E-Mail*</StandardLabel>
                    <StyledInput id="email" name="email" type="email" placeholder="Enter your e-mail here" required />
                 
                    <StandardLabel htmlFor="your-message">Your message*</StandardLabel>
                    <MessageInput id="message" name="message" type="text" placeholder="Type your message here"required/>
                   
                    <ButtonContainer>
                        <SubmittButton onClick={handleSubmit} type="submit">submit</SubmittButton>
                    </ButtonContainer>
                </ContactForm>
            </div>}
        </StandardArticle>
    )
}