import styled from "styled-components"

const FooterStyled = styled.footer`
    text-align: center;
    font-size: 1rem;
    font-weight: 400; 
    color: #fcfffc;
    position: sticky; 
bottom: -3rem;
    min-width: 350px;
    max-width: 700px;
    margin: 1.5rem 1rem .5rem;
    padding: .25rem;
    border: 1px solid darkorange;
    z-index: 3;
    border-radius: 6px;
     &:hover {
    color:rgb(252, 188, 69);   
  }
`;

const VersionNr = styled.span`
color: #fcfffc;
font-size: 0.8rem;
// border: 1px solid red;
z-index: 2;
`;

export default function Footer({setWhatIsShown}) {
    return (
        <FooterStyled onClick={() => setWhatIsShown("avalanche")}>
           © 2025 Avalanche & Landslide <VersionNr>(v0.004 alpha)</VersionNr>
        </FooterStyled>
    )
}