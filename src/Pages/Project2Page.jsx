import Footer from "../components/Footer";
import ImageGallery from "../components/ProjectPage/ImageGallery";
import MenuBar from "../components/ProjectPage/MenuBar";
import ProjectTitle from "../components/ProjectPage/ProjectTitle";
import { useRef, useEffect, useLayoutEffect } from "react";
import TeamMembers from "../components/ProjectPage/TeamMembers";
import { useLocation } from "react-router-dom";

function Project2Page() {
    const background = useRef(null);
    const location = useLocation();
    
        // scroll to top of page after a page transition.
        useLayoutEffect(() => {
            document.documentElement.scrollTo({ top:0, left:0, behavior: "instant" });
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
            <div className="flex justify-end">
                <img id="background" src="img/fantasy-char-creator-background.png" alt="" ref={background} className=" absolute z-0" />
            </div>
            <div className="w-full h-full relative z-1">
                <MenuBar></MenuBar>
                <ProjectTitle id="fantasy-char-creator"></ProjectTitle>


                {/* Page Description */}
                <div className="bg-dark-gray-navy p-8 lg:grid grid-cols-2 gap-12 rounded-3xl">
                    <div className="p-8 grid grid-cols-1 mb-12">

                        {/* Header with paragraph centered */}
                        <div className="h-96">
                            <div className="">
                                <div className=" pb-2 border-b-2 w-fit">
                                    <h2 className="text-4xl text-clay-navy font-bold font-jetbrains">Descrição</h2>
                                </div>
                            </div>
                            <div className="mt-3 ">
                                <h2 className="text-left text-3xl text-clay-navy font-jetbrains">Desenvolvi um projeto que permite criar e personalizar personagens de forma dinâmica, com visualização em tempo real das modificações. O sistema oferece diversas opções customizadas como aparência, classe e vestimentas, proporcionando uma experiência imersiva e intuitiva.</h2>
                            </div>
                        </div>

                        {/* Header with Paragraph and UList */}
                        <div className="mt-12 table h-96">
                            <div className="table-row ">
                                <div className="pb-2 border-b-2 w-fit">
                                    <h2 className="text-4xl text-clay-navy font-bold">Responsabilidades</h2>
                                </div>
                            </div>
                            <div className="table-row">
                                <h2 className="mt-3 text-3xl line-clamp-3 text-clay-navy font-jetbrains">Durante o desenvolvimento, assumi diversas responsabilidades fundamentais:</h2>
                                <ul className="list-disc pt-3 pl-6 text-2xl font-jetbrains">
                                    <li className="text-clay-navy mt-3">Estruturei a arquitetura cliente-servidor, permitindo a comunicação eficiente entre cliente e servidor para autenticação e gerenciamento dinâmico de dados.</li>
                                    <li className="text-clay-navy mt-3">Participei da criação de elementos visuais e design, garantindo uma interface atraente e intuitiva para o usuário.</li>
                                    <li className="text-clay-navy mt-3">Modelei e implementei o banco de dados utilizando MySQL, otimizando a estrutura para suportar operações de CRUD com segurança e eficiência.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="p-8 grid justify-center justify-items-center items-center">
                        <img src="img/fantasy-char-creator-image1.png" alt="" className="" />
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
export default Project2Page;