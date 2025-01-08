function TecnologyItem({ title, imgNames, description }) {
    let path = `img/`;
    return (

        <div className="my-12 w-full h-full">
            <div className="relative">
                <div className="grid grid-cols-3 gap-3 w-48">
                    {imgNames.map((imgName, index) => (
                        <img key={index} src={path+imgName+"-icon.png"} alt={`Image ${index}`} className="" />
                    ))}
                </div>
                <div className="  w-full h-32  left-0 bottom-0 right-0">
                    <h2 className="mx-1 mt-2 sm:text-3xl md:text-4xl text-cream-leo font-lato underline underline-offset-8 decoration-cream-leo decoration-4">{title}</h2>
                    <p className="mx-2 mt-4 sm:text-2xl md:text-3xl line-clamp-5 text-cream-leo font-inter">{description}</p>
                </div>
            </div>
        </div>
    );
}
export default TecnologyItem;