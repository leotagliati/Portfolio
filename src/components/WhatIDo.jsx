import TecnologyItem from "./TecnologyItem";

function WhatIDo() {
    return (
        <div className="my-10">
            <h1 className="my-6 text-5xl font-pixelify text-cream-leo underline underline-offset-8 decoration-cream-leo decoration-4 ">What I Do</h1>

            <p className="my-5 mx-2 text-cream-leo  font-pixelify text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis laborum quae. Aspernatur et corrupti autem? Incidunt repellendus corporis inventore magni! Laboriosam culpa, sint placeat perferendis libero aperiam ratione minima.
            </p>

            <div className="my-16 grid grid-cols-4 gap-5">
                <TecnologyItem title="React" imgNames={['react']} description={"descricao dos react"}></TecnologyItem>
            </div>

        </div>
    );
}
export default WhatIDo;