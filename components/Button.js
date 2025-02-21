import {
    StandardButton,
  } from "@/sharedStyledComponents";


export default function Button({ isActive, activeColor, text, buttonFunction, argument, toggle}) {
  function handleButton() {
    const finalArgument = toggle? argument : text;
    buttonFunction(finalArgument);
}
    return(
      <StandardButton onClick={handleButton} $color={isActive? activeColor : "#fcfffc"}>
   {text}
  </StandardButton>
 )
}