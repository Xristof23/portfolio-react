import { Headline1, StandardArticle, StandardParagraph } from "@/sharedStyledComponents"
import Button from "./Button";

export default function Article({ content, setWhatIsShown }) {
    const { headline, paragraphList, buttonText } = content;
    return (
        <StandardArticle>
            <Headline1>{headline}</Headline1>
            {paragraphList.map((entry)=><StandardParagraph key={entry}>{entry}</StandardParagraph>)}
            {buttonText === "click" && <Button text={buttonText} buttonFunction={setWhatIsShown} parameter="me" />}
        </StandardArticle>
    )
}