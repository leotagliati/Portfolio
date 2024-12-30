import { Link } from "react-router-dom";

function ProjectItem({ projectTitle, description }) {
    let imgTitle = projectTitle.toLowerCase();
    let imgPath = `./src/assets/img/${imgTitle}-coverImage.png`;
    return (
        <>
        <Link to='/page1'>
            <div className="w-full h-full">
                <div className="bg-blue-500 relative">
                    <img src={imgPath} alt="" />
                    <div className="bg-red-600 w-full h-24 absolute left-0 bottom-0 right-0">
                        <h2 className="mx-2 text-2xl">{projectTitle}</h2>
                        <p className="mx-2 mt-2 line-clamp-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo accusamus sunt ab! Porro perspiciatis modi deserunt, quasi dolor officiis quia, doloremque maxime vero aspernatur necessitatibus obcaecati molestiae, quidem vitae! Architecto!</p>
                    </div>
                </div>

            </div>
        </Link>
        </>
    );

}
export default ProjectItem