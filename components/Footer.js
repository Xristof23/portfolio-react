import styled from "styled-components"

const FooterStyled = styled.footer`
    text-align: center;
    font-size: 1rem;
    font-weight: 400; 
    color: #fcfffc;
    position: absolute; 

    min-width: 350px;
    max-width: 700px;
    margin: 1.5rem 1rem .5rem;
    padding: .25rem;
    border: 1px solid darkorange;
    border-radius: 6px;
`;

export default function Footer() {
    return (
        <FooterStyled>© 2025 Avalanche & Landslide </FooterStyled>
    )
}