function ProjectTitle({ name, id }) {
    let imgPath1 = `./src/assets/img/${id}-image1.png`;
    return (
        <>
            <div className="w-full flex  justify-center  bg-cyan-200 ">
                <img src={imgPath1} alt="" className=" w-full"/>
                <h1 className="absolute text-8xl my-96 text-center bg-red-600 text-slate-100">{name}</h1>
            </div>
        </>
    );
}
export default ProjectTitle;