import Footer from "../components/Footer";
import ImageGallery from "../components/ProjectPage/ImageGallery";
import MenuBar from "../components/ProjectPage/MenuBar";
import ProjectTitle from "../components/ProjectPage/ProjectTitle";
import { useRef, useEffect, useLayoutEffect } from "react";
import TeamMembers from "../components/ProjectPage/TeamMembers";
import VideoShowcase from "../components/ProjectPage/VideoShowcase";
import { useLocation } from "react-router-dom";

function Project3Page() {
    const background = useRef(null);
    const location = useLocation();

    // scroll to top of page after a page transition.
    useLayoutEffect(() => {
        document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [location.pathname])

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

    const membersList = [{ name: "Leo", id: "profileImage" }];
    return (
        <>

            <img id="background" src="img/website-portfolio-background.png" alt="" ref={background} className="w-full absolute z-0" />
            <div className="w-full h-full relative z-1">
                <MenuBar></MenuBar>
                <ProjectTitle id="website-portfolio" ></ProjectTitle>


                {/* Page Description */}
                <div className="bg-dark-gray-navy p-8 lg:grid grid-cols-2 gap-12 rounded-3xl">
                    <div className="p-8 grid grid-cols-1 mb-12">

                        {/* Header with paragraph centered */}
                        <div className="h-fit">
                            <div className="">
                                <div className=" pb-2 border-b-2 w-fit">
                                    <h2 className="text-4xl text-clay-navy font-bold font-jetbrains">Descrição</h2>
                                </div>
                            </div>
                            <div className="mt-3 ">
                                <h2 className="text-left text-3xl text-clay-navy font-jetbrains">Este projeto em React é uma ideia minha para aprimorar minha expertise em frontend. O objetivo é criar um portfólio que não apenas demonstre meus projetos, mas também reflita minha atenção aos detalhes e habilidades em criar interfaces intuitivas e visualmente atraentes.</h2>
                            </div>
                        </div>

                        {/* Header with Paragraph and UList */}
                        <div className="mt-12 table h-96">
                            <div className="table-row ">
                                <div className="pb-2 border-b-2 w-fit">
                                    <h2 className="text-4xl text-clay-navy font-bold">Habilidades</h2>
                                </div>
                            </div>
                            <div className="table-row">
                                <h2 className="mt-3 text-3xl line-clamp-3 text-clay-navy font-jetbrains">Durante o desenvolvimento:</h2>
                                <ul className="list-disc pt-3 pl-6 text-2xl font-jetbrains">
                                    <li className="text-clay-navy mt-3">Aprendi a aplicar conceitos de responsividade e acessibilidade, garantindo uma experiência consistente em diferentes dispositivos.</li>
                                    <li className="text-clay-navy mt-3">Desenvolvi boas práticas de estruturação, facilitando a reutilização de componentes criados e manutenção do projeto.</li>
                                    <li className="text-clay-navy mt-3"> Aprendi a implementar efeitos visuais diferenciados como o Parallax para melhorar a experiência do usuário.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="p-8 flex flex-wrap justify-center items-center">
                        <img src="img/website-portfolio-image1.png" alt="" className="lg:h-2/3" />
                        <TeamMembers members={membersList}></TeamMembers>

                    </div>
                </div>
            </div>
            <div className="p-4 bg-dark-purple-leo w-full relative z-2">
                <ImageGallery></ImageGallery>
                <Footer></Footer>
            </div>

        </>
    );
}
export default Project3Page;