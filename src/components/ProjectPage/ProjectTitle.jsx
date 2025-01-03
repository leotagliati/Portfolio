function ProjectTitle({ name, id }) {
    let imgPath1 = `./src/assets/img/${id}-image1.png`;
    return (
        <>
            <div className="w-1/3 bg-cyan-200 grid grid-rows-2 gap-6 p-4 justify-center">
                <img src="src\assets\img\title-sword-of-obsessia.png" alt="" className="bg-green-300 py-8" />
                <div className="grid grid-cols-2 py-8 px-6">
                    <img src="src\assets\img\Logo-icon.png" alt="" className="bg-green-300 " />
                    <h1 className="bg-red-500 text-center text-2xl mt-6 h-20">Developed by <h2 className="font-extrabold">Pluma Studios</h2></h1>
                </div>
            </div>
        </>
    );
}
export default ProjectTitle;