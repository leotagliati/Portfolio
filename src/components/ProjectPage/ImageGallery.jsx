function ImageGallery() {
    return (
        <div className=" bg-blue-500 absolute w-full">
            <div className="grid grid-cols-2 m-12 gap-12 justify-items-center bg-purple-500">
                <img src="src/assets/img/alternativePhoto.gif" alt="" className="p-5 bg-white"/>
                <img src="src/assets/img/alternativePhoto.gif" alt="" className="p-5 bg-white"/>
                <img src="src/assets/img/alternativePhoto.gif" alt="" className="p-5 bg-white"/>
                <img src="src/assets/img/alternativePhoto.gif" alt="" className="p-5 bg-white"/>
            </div>
        </div>
    );

}
export default ImageGallery;