import { Link } from "react-router-dom";

function MenuBar() {
    return (
        <>
            <div className=" w-full py-8 h-20 bg-black-navy overflow-hidden">
                <div className="bg-dark-gray-navy rounded-3xl my-3 sm:mx-32 md:mx-52 h-16 text-2xl flex flex-row justify-center relative z-1 overflow-hidden">

                    <Link to={'/Portfolio/'}>
                        <h1 className="w-48 h-24 text-center hover:text-clay-navy  hover:bg-gray-navy duration-200 text-gray-400">Home</h1>
                    </Link>

                    {/* TODO: Modal items for programming and art topics*/}
                    <h1 className="w-48 h-24 text-center hover:text-clay-navy  hover:bg-gray-navy duration-200 text-gray-400">Gallery</h1>

                    <Link to={'/Portfolio/contact/'}>
                        <h1 className="w-48 h-24 text-center hover:text-clay-navy  hover:bg-gray-navy duration-200 text-gray-400">Contact</h1>
                    </Link>
                </div>
            </div>
        </>
    );

}
export default MenuBar;