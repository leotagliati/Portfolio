function ProjectTitle({ name, id }) {
    let imgPath1 = `./src/assets/img/${id}-image1.png`;
    return (
        <>
            <div className="w-72 h-96 bg-cyan-200 ">
                <h1 className=" text-2xl text-center bg-red-600 text-slate-100">{name}</h1>
            </div>
        </>
    );
}
export default ProjectTitle;