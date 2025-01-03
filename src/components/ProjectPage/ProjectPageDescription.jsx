function ProjectPageDescription() {
    return (
        <>
            <div className="bg-blue-500 p-8 grid grid-cols-2 gap-12">
                <div className="table bg-red-600 h-96">
                    <h2 className="table-row text-center text-4xl">Sinopse</h2>
                    <h2 className="py-6 text-center text-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora
                        consequatur reprehenderit cupiditate minima. Veritatis sit odio saepe ipsum eius non
                        dolore illum excepturi itaque eveniet! Asperiores incidunt voluptatem tempora.
                    </h2>

                </div>
                <div className="bg-green-300">
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
                <div className="table bg-red-600 h-96">
                    <h2 className="table-row text-center text-4xl">Contribuition</h2>
                    <h2 className="py-6 text-center text-3xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempora
                        consequatur reprehenderit cupiditate minima. Veritatis sit odio saepe ipsum eius non
                        dolore illum excepturi itaque eveniet! Asperiores incidunt voluptatem tempora.
                    </h2>

                </div>
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