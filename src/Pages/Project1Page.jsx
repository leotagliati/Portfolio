import ImageGallery from "../components/ProjectPage/ImageGallery";
import MenuBar from "../components/ProjectPage/MenuBar";
import ProjectPageDescription from "../components/ProjectPage/ProjectPageDescription";
import ProjectTitle from "../components/ProjectPage/ProjectTitle";
import { useRef, useEffect } from "react";

function Project1Page() {
        const background = useRef(null);
    
        useEffect(() => {
            const handleScroll = () => {
                const value = window.scrollY;
    
                if (background.current) {
                    background.current.style.top = value * 0.2 + "px";
                }
            };
    
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);

        const membersList = [{name:"Leo", id:"profileImage"},
            {name:"leo", id:"leo"},{name:"leo", id:"leo"},{name:"leo", id:"leo"},{name:"leo", id:"leo"},{name:"leo", id:"leo"},{name:"leo", id:"leo"}
        ];
    return (
        <>
            <img id="background"src="src\assets\img\sword-of-obsessia-background.png" alt="" ref={background}className="w-full absolute z-0" />
            <div className="w-full h-full relative z-1">
                <MenuBar></MenuBar>
                <ProjectTitle name="Sword of Obsessia" id="sword-of-obsessia"></ProjectTitle>
                <ProjectPageDescription members= {membersList}></ProjectPageDescription>
            </div>
            <ImageGallery></ImageGallery>
        </>
    );
}
export default Project1Page;