function ProjectTitle({ name, id }) {
    let imgPath1 = `img/${id}-image1.png`;
    return (
        <>
            <div className="w-1/3 border-y border-black  bg-gradient-to-b from-dark-gray-navy to-black-navy grid grid-rows-2 gap-6 p-4 justify-center">
                <img src="img\title-sword-of-obsessia.png" alt="" className="py-8" />
                <div className="grid grid-cols-2 py-8 px-6">
                    <img src="img\Logo-icon.png" alt="" className=" " />
                    <h1 className="text-center text-clay-navy text-2xl mt-8 h-20">Developed by <h2 className="font-extrabold">Pluma Studios</h2></h1>
                </div>
            </div>
        </>
    );
}
export default ProjectTitle;