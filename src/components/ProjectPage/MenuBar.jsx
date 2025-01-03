import ContactIcon from "../ContactIcon";

function MenuBar() {
    return (
        <>
            <div className=" w-full py-8 h-20 bg-purple-500 overflow-hidden">
                <div className="bg-red-800 rounded-3xl my-3 mx-52 h-16 text-2xl flex flex-row justify-center gap-12 relative z-1 overflow-hidden">
                    <h1 className="mt-1">Home</h1>
                    <h1 className="mt-1">Portifolio</h1>
                    <h1 className="mt-1">Contact</h1>
                </div>
            </div>
        </>
    );

}
export default MenuBar;