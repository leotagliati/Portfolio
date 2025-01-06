function ProjectTitle({ id, studioId }) {
    let imgPathLogo = `img/${studioId}-icon.png`;
    return (
        <>
            <div className="w-1/3 border-y border-black  bg-gradient-to-b from-dark-gray-navy to-black-navy grid grid-rows-2 gap-6 p-4 justify-center">
                <img src="img/title-sword-of-obsessia.png" alt="" className="py-8" />
                {studioId != null ? 
                    <div className="grid grid-cols-2 py-8 px-6">
                        <img src={imgPathLogo} alt="" className="" />
                        <h1 className="text-center text-clay-navy text-2xl mt-8 h-20">Developed by <h2 className="font-extrabold">{formatStudioName(studioId)}</h2></h1>
                    </div>
                    :
                    <div className="grid grid-cols-2 py-8 px-6">
                        <img src="img/profileImage.png" alt="" className="h-32" />
                        <h1 className="text-center text-clay-navy text-2xl mt-8 h-20">Developed by <h2 className="font-extrabold">Me</h2></h1>
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