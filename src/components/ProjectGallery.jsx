import ProjectItem from "./ProjectItem";

function ProjectGallery() {
    const projectList = [{ name: "project1", desc: "lorem" }, { name: "project1", desc: "ola leo" }, { name: "project1", desc: "ola leo" }, { name: "project1", desc: "ola leo" }]
    const projectsMap = projectList.map(x => <ProjectItem projectTitle={x.name} description={x.desc}></ProjectItem>)
    return (
        <>
            <h1>Projects</h1>

            <div className="grid  gap-4 grid-cols-1 md:grid-cols-3">
                {projectsMap}
            </div>
        </>
    );
}
export default ProjectGallery