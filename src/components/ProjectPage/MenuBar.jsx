import ContactIcon from "../ContactIcon";

function MenuBar(){
        return (
            <>
                <div className="text-5xl absolute w-full h-32 bg-purple-500 flex gap-x-64 justify-center p-8">
                    <h1>Home</h1>
                    <h1>Contacts</h1>
                    <h1>My Work</h1>
                </div>
            </>
        );
    
}
export default MenuBar;