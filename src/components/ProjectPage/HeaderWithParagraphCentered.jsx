function HeaderWithParagraph({ h1, p }) {
    return (
        <div className="h-96">
            <div className="">
                <div className=" pb-2 border-b-2 w-fit">
                    <h2 className="text-4xl text-clay-navy font-bold font-jetbrains">{h1}</h2>
                </div>
            </div>
            <div className="mt-3 ">
                <h2 className="text-3xl text-clay-navy font-jetbrains">{p}</h2>
            </div>
        </div>
    );
}
export default HeaderWithParagraph;