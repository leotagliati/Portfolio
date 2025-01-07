import { Link } from "react-router-dom";

function MenuBar() {
    return (
        <>
            <div className=" w-full py-8 h-20 bg-black-navy overflow-hidden">
                <div className="bg-dark-gray-navy rounded-3xl my-3 sm:mx-32 md:mx-52 h-16 text-2xl flex flex-row justify-center gap-24 relative z-1 overflow-hidden">

                    <Link to={'/Portfolio/'}>
                        <h1 className="text-clay-navy">Home</h1>
                    </Link>

                    {/* TODO: Modal items for programming and art topics*/}
                    <h1 className="text-clay-navy">Portifolio</h1>

                    <Link to={'/Portfolio/contact/'}>
                        <h1 className="text-clay-navy">Contact</h1>
                    </Link>
                </div>
            </div>
        </>
    );

}
export default MenuBar;