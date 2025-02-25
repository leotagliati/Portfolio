function ProjectTitle({ id, studioId }) {
    let imgPathLogo = `img/${studioId}-icon.png`;
    let imgTitlePath = `img/title-${id}.png`;
    return (
        <>
            <div className="w-1/3 border-y border-black  bg-gradient-to-b from-dark-gray-navy to-black-navy grid md:grid-rows-2 gap-6 p-4 justify-center">
                <img src={imgTitlePath} alt={`title-${id}`} className="py-8" />
                {studioId != null ? 
                    <div className="grid grid-cols-2 md:py-8 md:px-6">
                        <img src={imgPathLogo} alt="" className="" />
                        <h1 className="text-center text-clay-navy md:text-2xl md:mt-8 h-20">Developed by <h2 className="font-extrabold">{formatStudioName(studioId)}</h2></h1>
                    </div>
                    :
                    <div className="grid grid-cols-2 py-8 px-6">
                        <img src="img/profileImage.png" alt="" className="md:h-32" />
                        <h1 className="text-center text-clay-navy md:text-2xl md:mt-8 h-20">Developed by <h2 className="font-extrabold">Me</h2></h1>
                    </div>
                }
            </div>
        </>
    );
}
export default ProjectTitle;
function formatStudioName(id) {
    return id
        .split('-') 
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
        .join(' ');
}