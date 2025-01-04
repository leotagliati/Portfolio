import Footer from "../components/Footer";
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
                background.current.style.top = value * 0.4 + "px";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const membersList = [{ name: "Leo", id: "profileImage" },
    { name: "Thiago", id: "thiago" }, { name: "Lucas Duez", id: "lucas-duez" }, { name: "Laura Daud", id: "laura-daud" }
    ];
    return (
        <>
            <img id="background" src="src\assets\img\sword-of-obsessia-background.png" alt="" ref={background} className="w-full absolute z-0" />
            <div className="w-full h-full relative z-1">
                <MenuBar></MenuBar>
                <ProjectTitle name="Sword of Obsessia" id="sword-of-obsessia"></ProjectTitle>
                <ProjectPageDescription members={membersList}></ProjectPageDescription>
            </div>
            <ImageGallery></ImageGallery>
            <div className="p-4 bg-dark-purple-leo w-full">
                <Footer></Footer>
            </div>
        </>
    );
}
export default Project1Page;