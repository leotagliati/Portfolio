import HeaderWithParagraph from "./HeaderWithParagraphCentered";
import TeamMembers from "./TeamMembers";

function ProjectPageDescription({ members }) {

    return (
        <>
            <div className="bg-dark-gray-navy p-8 grid grid-cols-2 gap-12 rounded-3xl">
                <div className="p-8 grid grid-cols-1 mb-12">
                    <HeaderWithParagraph h1="Sinopse" p="In Sword of Obsessia, you embark on an epic journey as a knight with a cursed sword. Traverse through the dungeon, confront your fears and rise!"></HeaderWithParagraph>

                    <HeaderWithParagraph h1="Responsabilidades" p="Durante o desenvolvimento, assumi diversas responsabilidades fundamentais para o sucesso do projeto. Atuei como desenvolvedor de sistemas de gameplay, implementando mecânicas dinâmicas, como a integração de cartas de tarô e a lógica de combate inspirada no tema de cavaleiros e masmorras. "></HeaderWithParagraph>

                    {/* <TeamMembers members={members}></TeamMembers> */}
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