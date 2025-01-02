import About from "../components/About";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ProjectGallery from "../components/ProjectGallery";
import WhatIDo from "../components/WhatIDo";

function Home() {
    return (
        <div className="bg- relative">
            <img src="src\assets\img\Parallax\Parallax1.png" alt="" className="w-full absolute"/>
            <img src="src\assets\img\Parallax\Parallax2.png" alt="" className="w-full absolute"/>
            <img src="src\assets\img\Parallax\Parallax3.png" alt="" className="w-full absolute translate-y-52"/>
            <img src="src\assets\img\Parallax\Parallax4.png" alt="" className="w-full absolute translate-y-64"/>
            <img src="src\assets\img\Parallax\Parallax5.png" alt="" className="w-full absolute translate-y-96"/>

            
            
            <div className='px-12 absolute'>
                <ContactList></ContactList>
                <Intro></Intro>
                <About></About>
                <WhatIDo></WhatIDo>
                <ProjectGallery></ProjectGallery>
                <Footer></Footer>
            </div>

        </div>
    );
}
export default Home;