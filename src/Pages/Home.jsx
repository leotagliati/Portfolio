import About from "../components/About";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Parallax from "../components/Parallax";
import ProjectGallery from "../components/ProjectGallery";
import WhatIDo from "../components/WhatIDo";

function Home() {
    return (
        <>
            <div className="relative">
                <div className="absolute inset-0 z-0">
                    <Parallax></Parallax>
                </div>

                <div className="h-full bg-mountain-purple ">

                    <div className='px-12 h-full relative z-10 '>
                        <ContactList></ContactList>
                        <Intro></Intro>
                        <About></About>
                        <WhatIDo></WhatIDo>
                        <ProjectGallery></ProjectGallery>
                        <Footer></Footer>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Home;