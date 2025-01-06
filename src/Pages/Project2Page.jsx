import { useEffect, useRef } from "react";
import Footer from "../components/Footer";
import ImageGallery from "../components/ProjectPage/ImageGallery";
import MenuBar from "../components/ProjectPage/MenuBar";
import ProjectPageDescription from "../components/ProjectPage/ProjectPageDescription";
import ProjectTitle from "../components/ProjectPage/ProjectTitle";

function Project2Page() {
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

    const membersList = [{ name: "Leo", id: "profileImage" },];
    return (
        <>
            <img id="background" src="img/fantasy-char-creator-background.png" alt="" ref={background} className="w-full absolute z-0" />
            <div className="w-full h-full relative z-1">
                <MenuBar></MenuBar>
                <ProjectTitle name="Medieval Character Creator" id="fantasy-char-creator"></ProjectTitle>
                <ProjectPageDescription members={membersList}></ProjectPageDescription>
            </div>
            <ImageGallery></ImageGallery>
            <div className="p-4 bg-dark-purple-leo w-full">
                <Footer></Footer>
            </div>
        </>
    );
}
export default Project2Page;