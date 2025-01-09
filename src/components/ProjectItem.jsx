import { Link } from "react-router-dom";

function ProjectItem({ projectTitle, description , projectId}) {
    let imgTitle = projectTitle.toLowerCase();
    let imgPath = `img/${projectId}-coverImage.png`;
    let pagePath = `/Portfolio/${projectId}`;
    return (
        <>
        <Link to={pagePath}>
            <div className="w-full h-full transform transition-transform duration-300 hover:scale-105">
                <div className="bg-purple-leo relative flex justify-center">
                    <img src={imgPath} alt="" className="sm:p-4 md:py-4" />
                    <div className="bg-purple-leo w-full md:h-52 absolute left-0 sm:bottom-2 md:bottom-0 right-0">
                        <h2 className="mx-4 mt-3 text-3xl text-cream-leo font-inter underline underline-offset-8">{projectTitle}</h2>
                        <p className="mx-5 mt-4 text-2xl sm:line-clamp-4 md:line-clamp-3 text-cream-leo font-lato">{description}</p>
                    </div>
                </div>

            </div>
        </Link>
        </>
    );

}
export default ProjectItem