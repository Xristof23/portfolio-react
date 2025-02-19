import {
    StandardButton,
  } from "@/sharedStyledComponents";
import { useState } from "react";


export default function Button({ text }) {
  const [isActive, setIsActive] = useState(false);
    function handleButton() {
        console.log(text);
      setIsActive(!isActive);
    }
    return(
    <StandardButton onClick={handleButton} $color={isActive? "darkorange" : "#fcfffc"}>
   {text}
  </StandardButton>
 )
}