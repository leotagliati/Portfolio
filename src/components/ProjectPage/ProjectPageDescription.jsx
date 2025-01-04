import HeaderWithList from "./HeaderWithListCentered";
import HeaderWithParagraph from "./HeaderWithParagraphCentered";
import TeamMembers from "./TeamMembers";

function ProjectPageDescription({ members }) {

    return (
        <>
            <div className="bg-dark-gray-navy p-8 grid grid-cols-2 gap-12 rounded-3xl">
                <div className="p-8 grid grid-cols-1 mb-12">
                    <HeaderWithParagraph h1="Sinopse" p="Em Sword of Obsessia, você embarca em uma jornada épica como um cavaleiro com uma espada amaldiçoada. Atravessando masmorras, você enfrentará seus medos e jogará dados valendo seu destino!"></HeaderWithParagraph>

                    <HeaderWithList h1="Responsabilidades" p="Durante o desenvolvimento, assumi diversas responsabilidades fundamentais:" list="
                    Desenvolvi sistemas de combate interativos, buffs e debuffs dinâmicos, e a masmorra, focando na otimização para uma experiência fluida.
                    *Participei da criação dos personagens e animações detalhadas, criando uma estética sombria e uma interface de usuário intuitiva e funcional.
                    *Coordenei a equipe, integrei assets e participei ativamente de testes e ajustes, garantindo uma experiência coesa e refinada."></HeaderWithList>

                </div>
                <div className="p-8 flex flex-wrap justify-center items-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AM8DZEEDCwE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className=""
                    ></iframe>
                    <TeamMembers members={members}></TeamMembers>

                </div>
            </div>

        </>
    );
}
export default ProjectPageDescription;