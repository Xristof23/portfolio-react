import {
    StandardButton,
  } from "@/sharedStyledComponents";


export default function Button({ isActive, text, whatIsShown, setWhatIsShown }) {
  
    function handleButton() {
      setWhatIsShown(text)
  }
  
    return(
      <StandardButton onClick={handleButton} $color={isActive? "darkorange" : "#fcfffc"}>
   {text}
  </StandardButton>
 )
}