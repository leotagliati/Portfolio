import { Link } from "react-router-dom";

function ProjectItem({ projectTitle, description , projectId}) {
    let imgTitle = projectTitle.toLowerCase();
    let imgPath = `img/${projectId}-coverImage.png`;
    let pagePath = `/Portfolio/${projectId}`;
    return (
        <>
        <Link to={pagePath}>
            <div className="w-full h-full">
                <div className="bg-purple-leo relative flex justify-center">
                    <img src={imgPath} alt="" className="sm:p-4 md:py-4" />
                    <div className="bg-purple-leo w-full md:h-32 absolute left-0 sm:bottom-2 md:bottom-0 right-0">
                        <h2 className="mx-2 mt-2 text-3xl text-cream-leo font-pixelify underline underline-offset-8">{projectTitle}</h2>
                        <p className="mx-2 mt-3 sm:line-clamp-4 md:line-clamp-2 text-cream-leo font-pixelify">{description}</p>
                    </div>
                </div>

            </div>
        </Link>
        </>
    );

}
export default ProjectItem