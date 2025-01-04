import { split } from "postcss/lib/list";

function Person({name, id}) {
    const path = `src/assets/img/${id}.png`;
    const firstName = split(name,' ');
    return(
        <div className="mt-8 grid grid-rows-1 justify-center">
            <img src={path} alt="" className="rounded-xl h-20"/>
            <h1 className="mt-3 text-2xl text-white text-center font-inter">{firstName}</h1>
        </div>
    );
    
}
export default Person;