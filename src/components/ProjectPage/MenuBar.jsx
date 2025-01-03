import ContactIcon from "../ContactIcon";

function MenuBar() {
    return (
        <>
            <div className=" w-full py-8 h-20 bg-purple-500">
                <div className="bg-red-800 mx-48 h-12 text-2xl flex flex-row justify-center gap-12">
                    <h1 className="mt-4">Home</h1>
                    <h1 className="mt-4">Portifolio</h1>
                    <h1 className="mt-4">Contact</h1>
                </div>
            </div>
        </>
    );

}
export default MenuBar;