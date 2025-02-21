import { Headline1, StandardArticle, StandardParagraph } from "@/sharedStyledComponents"

export default function Article({ content }) {
    const { headline, paragraphList } = content;
    return (
        <StandardArticle>
            <Headline1>{headline}</Headline1>
            {paragraphList.map((entry)=><StandardParagraph key={entry}>{entry}</StandardParagraph>)}
        </StandardArticle>
    )
}