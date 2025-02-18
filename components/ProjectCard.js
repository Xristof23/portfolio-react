import { StandardParagraph } from "@/sharedStyledComponents";
import Button from "./Button";

export default function ProjectCard({ project }) {
    const { title, shortDescription, url } = project;
   
    return (
        <article>
            <h2>{title}</h2>
             <StandardParagraph>${shortDescription}</StandardParagraph>
        <Button text="show details"/>
        
        
        {/* <a class="content_link" href=${url} title="Check this out" >visit ${title} website</a> */}
        </article>)
} 