import {
    ButtonContainer,
    FlexRowWrapper,
    StandardButton,
  } from "@/sharedStyledComponents";


export default function Button({text}) {
    function handleButton() {
        alert(text);
    }
    return(
    <StandardButton onClick={handleButton}>
   {text}
  </StandardButton>
 )
}