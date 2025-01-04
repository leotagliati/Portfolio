import HeaderWithParagraph from "./HeaderWithParagraphCentered";

function ProjectPageDescription() {
    return (
        <>
            <div className="bg-dark-gray-navy p-8 grid grid-cols-2 gap-8">
                <HeaderWithParagraph h1="Sinopse" p="In Sword of Obsessia, you embark on an epic journey as a knight with a cursed sword. Traverse through the dungeon, confront your fears and rise!"></HeaderWithParagraph>

                <div className="">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/AM8DZEEDCwE"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="ml-2 my-6"
                    ></iframe>
                </div>
                <HeaderWithParagraph h1="Responsabilidades" p="Durante o desenvolvimento, assumi diversas responsabilidades fundamentais para o sucesso do projeto. Atuei como desenvolvedor de sistemas de gameplay, implementando mecânicas dinâmicas, como a integração de cartas de tarô e a lógica de combate inspirada no tema de cavaleiros e masmorras. "></HeaderWithParagraph>

                <div className="grid grid-rows-2 gap-12">
                    <div className="table bg-red-600 w-full">
                        <h2 className="table-row text-center text-4xl">Team Members</h2>
                        <div className="grid grid-cols-4">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default ProjectPageDescription;