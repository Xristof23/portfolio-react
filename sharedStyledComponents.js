import Link from "next/link";
import styled from "styled-components";

//Buttons
const ButtonContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  margin: 0.5rem;
  flex-direction: row;
  min-height: fit-content;
  position: relative; 
  left: 30%
  width: 40%;
  align-content: center;
  align-items: flex-start;
  border-radius: 4px;
`;

const StandardButton = styled.button`
color: black;
text-align: center;
font-size: 1.1rem;
line-height: 1.1rem;
font-weight: 500; 
margin: .3rem;
padding: 0.3rem;
width: ${({ $width }) => $width ? `${$width}px` : "5rem"};
background-color: ${({ $color }) => $color? $color : "#fcfffc"};
min-width: fit-content;
height: 2rem;
border-radius: 6px;
border: none;
 &:hover {
    background-color:rgb(252, 188, 69);
    cursor: pointer; 
  }
`;


//Basic
const StandardParagraph = styled.p`
color: #fcfffc;
font-size: 1rem;
width: 88%;
margin: .4rem;
padding: .4rem;
`;

const StandardArticle = styled.article`
    background-color: #222222;
    border-radius: 8px;
    padding: 0.25rem;
    margin: 0.5rem 0.25rem;
    `;

const Headline1 = styled.h1` 
color: #fffffc;
font-size: 1.3rem;
font-weight: 600; 
margin: .4rem .4rem .4rem;
padding: .4rem;
`;

const Headline2 = styled.h2`
color: #fffffc;
font-size: 1.2rem;
font-weight: 600; 
margin: .4rem;
padding: .4rem;
`;

const StandardLink = styled(Link)`
margin: 0.5rem;
text-decoration: none;
`;

//Basic-wrapper
const FlexRowWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const FlexColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

//Form
const StandardLabel = styled.label`
color: #fffffc;
 text-align: left;   
 font-size: 0.95rem;
  width: 100%;
  margin:.4rem;
  padding: .4rem;
`;

const StyledNrInput = styled.input`
  font-size: 0.8rem;
  width: 4rem;
  margin: .4rem;
  padding: .4rem;
  border-radius: 6px;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  min-width: 3rem;
  width: ${({ $width }) => $width? `${$width}px` : "6rem"};
  height: 1.8rem;
  margin: .2rem 0 .2rem .2rem;
  padding: 0
  border: 1px solid darkorange;
  border-radius: 6px;
`;

export {
    ButtonContainer,
    FlexRowWrapper,
    FlexColumnWrapper,
    Headline1,
    Headline2,
    StyledInput,
    StyledNrInput,
    StandardLabel,
    StandardArticle,
    StandardButton,
    StandardLink,
    StandardParagraph
  }