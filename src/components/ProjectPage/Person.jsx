function Person({ name, id }) {
    const path = `img/UsersIcons/${id}-icon.png`;
    const defaultImage = `img/UsersIcons/default-user-icon.png`;
    const firstName = name.split(' ')[0];

    return (
        <div className="mt-8 grid grid-rows-1 justify-center">
            {/* Container fixo para borda */}
            <div
                className="relative flex z-2 items-center justify-center rounded-full h-24 w-24"
                style={{
                    border: '2px solid #00FFFF', // Cor ciano
                }}
            >
                {/* Imagem com fallback */}
                <img
                    src={path}
                    alt=""
                    onError={(e) => {
                        e.target.onerror = null; // Remove o handler para evitar loops
                        e.target.src = defaultImage; // Substitui pela imagem padrão
                    }}
                    className="absolute inset-0 z-1 rounded-full h-full w-full object-cover"
                />
            </div>
            <h1 className="mt-3 text-2xl text-white text-center font-inter">
                {firstName}
            </h1>
        </div>
    );
}

export default Person;
