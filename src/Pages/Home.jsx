import About from "../components/About";
import ContactList from "../components/ContactList";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ProjectGallery from "../components/ProjectGallery";

function Home() {
    return (
        <div className='px-12'>
            <ContactList></ContactList>
            <Intro></Intro>
            <About></About>
            <ProjectGallery></ProjectGallery>
            <Footer></Footer>
        </div>
    );
}
export default Home;