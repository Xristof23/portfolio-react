import {
    StandardButton,
  } from "@/sharedStyledComponents";
import { useState } from "react";


export default function Button({ isActive, text, whatIsShown, setWhatIsShown }) {
  // const [isActive, setIsActive] = useState(false);
  console.log("whatIsShown button ", whatIsShown);
    function handleButton() {
      console.log(text);
      setWhatIsShown(text)
  }
  
    return(
      <StandardButton onClick={handleButton} $color={isActive? "darkorange" : "#fcfffc"}>
   {text}
  </StandardButton>
 )
}