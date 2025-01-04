import UnordList from "./UnordList";

function HeaderWithList({ h1, p, list}) {
    return (
        <div className="table h-96">
            <div className="table-row ">
                <div className="pb-2 border-b-2 w-fit">
                    <h2 className="text-4xl text-clay-navy font-bold">{h1}</h2>
                </div>
            </div>
            <div className="table-row">
                <h2 className="mt-3 text-3xl line-clamp-3 text-clay-navy font-jetbrains">{p}</h2>
                <UnordList itemsString={list}></UnordList>
            </div>
        </div>
    );
}
export default HeaderWithList;