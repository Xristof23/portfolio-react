import ProjectCard from "./ProjectCard";
export default function ProjectList({ list }) {

    return (
        <>
        {list.map((entry) => 
            <ProjectCard key={entry.title} project={entry} />
            )
          }
        </>
    )
}