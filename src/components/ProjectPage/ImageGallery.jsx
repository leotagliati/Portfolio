import HeaderWithParagraph from "./HeaderWithParagraphCentered";
import TeamMembers from "./TeamMembers";

function ImageGallery() {
    return (
        <div className=" bg-dark-purple-leo w-full pb-12">
            <div className="pb-1 pt-8 border-b-4 mx-96">
                <h1 className="text-center text-6xl text-clay-navy font-bold font-inter">Showcase</h1>
            </div>
            <div className="">
                <div className="py-12 grid grid-cols-2 px-12">
                    <img src="as" alt="" className="bg-green-300 h-96 w-11/12 border-4 rounded-xl  " />
                    <img src="as" alt="" className="bg-green-300 h-96 w-full border-4 rounded-xl " />
                </div>
                <div className="flex flex-row gap-16 px-12">
                    <img src="as" alt="" className="bg-green-300 h-96 w-8/12 border-4 rounded-xl  " />
                    <img src="as" alt="" className="bg-green-300 h-96 w-full border-4 rounded-xl " />
                </div>
            </div>
        </div>
    );

}
export default ImageGallery;