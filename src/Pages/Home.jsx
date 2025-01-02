import About from "../components/About";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ProjectGallery from "../components/ProjectGallery";

function Home() {
    return (
        <div className='px-12 bg-gradient-to-b  from-purple-leo to-dark-purple-leo'>
            <ContactList></ContactList>
            <Intro></Intro>
            <About></About>
            <ProjectGallery></ProjectGallery>
            <Footer></Footer>
        </div>
    );
}
export default Home;