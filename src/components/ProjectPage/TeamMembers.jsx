import Person from "./Person";

function TeamMembers({ members }) {
    const membersMap = members.map((x, index) => (
        <Person
            key={index} // Adicione uma `key` única para cada item
            name={x.name}
            id={x.id}
        />
    ));
    return (
        <div className="mx-2 grid grid-cols-1 justify-center">
            <div className="">
                <div className="flex justify-center pb-2 border-b-2 mx-20">
                    <h2 className=" text-4xl text-clay-navy font-bold">Team Members</h2>
                </div>
            </div>
            <div className="grid grid-cols-4">
                {membersMap}
            </div>
        </div>
    );
}
export default TeamMembers;