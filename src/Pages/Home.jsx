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
            <Parallax></Parallax>

            <div className="h-full bg-mountain-purple z-10">

                <div className='px-12 h-full bg-mountain-purple'>
                    <ContactList></ContactList>
                    <Intro></Intro>
                    <div className="">
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