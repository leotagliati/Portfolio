import ProjectItem from "./ProjectItem";

function ProjectGallery() {
    const projectList = [{ name: "Project1", desc: "lorem" }, { name: "project1", desc: "ola leo" }, { name: "project1", desc: "ola leo" }, { name: "project1", desc: "ola leo" }]
    const projectsMap = projectList.map(x => <ProjectItem projectTitle={x.name} description={x.desc}></ProjectItem>)
    return (
        <>
            <div className="my-3">

                <h1 className=" my-2 text-5xl">Projects</h1>

                <div className="grid  gap-4 grid-cols-1 md:grid-cols-3">
                    {projectsMap}
                </div>
            </div>
        </>
    );
}
export default ProjectGallery