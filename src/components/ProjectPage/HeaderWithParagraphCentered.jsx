function HeaderWithParagraph({ h1, p }) {
    return (
        <div className="table h-96">
            <div className="table-row ">
                <div className="pb-2 border-b-2 w-fit">
                    <h2 className="text-4xl text-clay-navy font-bold">{h1}</h2>
                </div>
            </div>
            <div className="table-row">
                <h2 className="text-3xl text-clay-navy">{p}</h2>
            </div>
        </div>
    );
}
export default HeaderWithParagraph;