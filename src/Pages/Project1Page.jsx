import ImageGallery from "../components/ProjectPage/ImageGallery";
import MenuBar from "../components/ProjectPage/MenuBar";
import ProjectPageDescription from "../components/ProjectPage/ProjectPageDescription";
import ProjectTitle from "../components/ProjectPage/ProjectTitle";

function Project1Page() {
    return (
        <>
            <div className="bg-purple-300 w-full h-full relative">

                <MenuBar></MenuBar>
                <div className="">
                    <ProjectTitle name="Sword of Obsessia" id="sword-of-obsessia"></ProjectTitle>
                    <ProjectPageDescription></ProjectPageDescription>
                </div>

            </div>
            <ImageGallery></ImageGallery>
        </>
    );
}
export default Project1Page;