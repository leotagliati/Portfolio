import { Link } from "react-router-dom";

function ProjectItem({ projectTitle, description , projectId}) {
    let imgTitle = projectTitle.toLowerCase();
    let imgPath = `./src/assets/img/${projectId}-coverImage.png`;
    let pagePath = `/${projectId}`;
    return (
        <>
        <Link to={pagePath}>
            <div className="w-full h-full">
                <div className="bg-purple-leo relative">
                    <img src={imgPath} alt="" className="" />
                    <div className="bg-purple-leo w-full h-32 absolute left-0 bottom-0 right-0">
                        <h2 className="mx-2 mt-2 text-3xl text-cream-leo font-pixelify underline underline-offset-8">{projectTitle}</h2>
                        <p className="mx-2 mt-3 line-clamp-2 text-cream-leo font-pixelify">{description}</p>
                    </div>
                </div>

            </div>
        </Link>
        </>
    );

}
export default ProjectItem