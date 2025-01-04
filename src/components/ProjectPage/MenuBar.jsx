import { Link } from "react-router-dom";
import ContactIcon from "../ContactIcon";

function MenuBar() {
    return (
        <>
            <h1 className="mx-20 mt-10 text-3xl absolute text-clay-navy font-pacifico">Leo</h1>
            <img className="mx-3 mt-2 h-16 absolute" src="src\assets\img\profileImage.png" alt="" />
            <div className=" w-full py-8 h-20 bg-black-navy overflow-hidden">
                <div className="bg-dark-gray-navy rounded-3xl my-3 mx-52 h-16 text-2xl flex flex-row justify-center gap-24 relative z-1 overflow-hidden">

                    <Link to={'/'}>
                        <h1 className="text-clay-navy">Home</h1>
                    </Link>

                    <h1 className="text-clay-navy">Portifolio</h1>

                    <Link to={'/contact'}>
                    <h1 className="text-clay-navy">Contact</h1>
                    </Link>
                </div>
            </div>
        </>
    );

}
export default MenuBar;