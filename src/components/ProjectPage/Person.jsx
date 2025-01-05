function Person({ name, id }) {
    const path = `img/${id}.png`;
    const firstName = name.split(' ')[0];

    return (
        <div className="mt-8 grid grid-rows-1 justify-center ">
            {/* Container fixo para borda */}
            <div
                className="relative flex items-center justify-center rounded-full h-20 w-20"
                style={{
                    border: '2px solid #00FFFF', // Cor ciano
                }}
            >
                {/* Imagem com tamanho controlado */}
                <img
                    src={path}
                    alt=""
                    className="rounded-full h-20 w-20 object-cover"
                />
            </div>
            <h1 className="mt-3 text-2xl text-white text-center font-inter">
                {firstName}
            </h1>
        </div>
    );
}

export default Person;
