function About() {
    return (
        <>
            <div className=" mt-96 my-10 grid gap-4 grid-rows-2">
                <div className="flex justify-center">
                    <img className="mt-12 h-48" src="src\assets\img\profileImage.png" alt="" />
                </div>
                <div className="p-3">
                    <h6 className="mt-6 mr-3 text-center text-cream-leo  h-14 text-5xl font-pixelify">Olá, eu sou Léo!</h6>
                    <p className="my-5 mr-3 text-center text-cream-leo  font-pixelify text-3xl">
                    Sou um engenheiro de software no Brasil, especializado em Desenvolvimento de Jogos Digitais e Sistemas Backend.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;