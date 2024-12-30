import ProjectItem from "./ProjectItem";

function ProjectGallery() {
    const projectList = [
        { name: "Project1", desc: "lorem" },
        { name: "project2", desc: "ola leo" },
        { name: "project3", desc: "ola leo" },
        { name: "project4", desc: "ola leo" },
    ];

    const projectsMap = projectList.map((x, index) => (
        <ProjectItem
            key={index} // Adicione uma `key` única para cada item
            projectTitle={x.name}
            description={x.desc}
        />
    ));

    return (
        <div className="my-3">
            <h1 className="my-2 text-5xl">Projects</h1>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                {projectsMap}
            </div>
        </div>
    );
}

export default ProjectGallery;
