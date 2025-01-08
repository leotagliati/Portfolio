import ProjectItem from "./ProjectItem";

function ProjectGallery() {
    const projectList = [
        { name: "Sword of Obsessia", desc: "Um jogo sobre a épica jornada do cavaleiro com uma espada amaldiçoada. Atravesse a masmorra e supere seus desafios." , id:"sword-of-obsessia"},
        { name: "Medieval Character Creator", desc: "Aplicação que permite criar e personalizar personagens de forma dinâmica, com visualização em tempo real. Ideal para jogos e aplicações de role-playing, oferece diversas opções de customização para aparência, classe e vestimentas." , id:"fantasy-char-creator"},
        { name: "Website Portfolio", desc: "Portfólio interativo em React com design responsivo, animações parallax e componentes dinâmicos. Destaca meus projetos e habilidades que desenvolvi durante a minha vida." , id:"website-portfolio"},
    ];

    const projectsMap = projectList.map((x, index) => (
        <ProjectItem
            key={index} // Adicione uma `key` única para cada item
            projectTitle={x.name}
            description={x.desc}
            projectId={x.id}
        />
    ));

    return (
        <div className="my-3">
            <h1 className="my-6 text-5xl font-jetbrains text-cream-leo underline underline-offset-8 decoration-cream-leo decoration-4 ">Projects</h1>
            <div className="grid gap-24 sm:grid-cols-1 md:grid-cols-2">
                {projectsMap}
            </div>
        </div>
    );
}

export default ProjectGallery;
