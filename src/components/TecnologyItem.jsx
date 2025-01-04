function TecnologyItem({ title, imgNames, description }) {
    let path = `src/assets/img/`;
    return (

        <div className="w-full h-full">
            <div className="relative">
                <div className="grid grid-cols-3 gap-3 w-48">
                    {imgNames.map((imgName, index) => (
                        <img key={index} src={path+imgName+"-icon.png"} alt={`Image ${index}`} className="" />
                    ))}
                </div>
                <div className=" w-full h-32  left-0 bottom-0 right-0">
                    <h2 className="mx-1 mt-2 text-3xl text-cream-leo font-pixelify ">{title}</h2>
                    <p className="mx-1 mt-1 text-1xl line-clamp-3 text-cream-leo font-pixelify">{description}</p>
                </div>
            </div>
        </div>
    );
}
export default TecnologyItem;