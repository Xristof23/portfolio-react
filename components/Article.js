import { Headline1, StandardArticle, StandardParagraph } from "@/sharedStyledComponents"



export default function Article({ content }) {
    const { headline, paragraph1, paragraph2, paragraph3 } = content;
    return (
        <StandardArticle>
            <Headline1>{headline}</Headline1>
            <StandardParagraph>{paragraph1}</StandardParagraph>
            {paragraph2 && <StandardParagraph>{paragraph2}</StandardParagraph>}
            {paragraph3 && <StandardParagraph>{paragraph3}</StandardParagraph>}
        </StandardArticle>
    )
}