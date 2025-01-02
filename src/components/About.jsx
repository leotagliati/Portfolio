function About() {
    return (
        <>
            <div className="bg-purple-leo my-10 grid gap-4 grid-rows-2">
                <div className="flex  justify-center">
                    <img className="mt-12 h-48" src="src\assets\img\profileImage.png" alt="" />
                </div>
                <div className="p-3">
                    <h6 className="mt-6 mr-3 text-center text-cream-leo  h-14 text-5xl font-pixelify">Hi there, I'm Leo!</h6>
                    <p className="my-5 mr-3 text-center text-cream-leo  font-pixelify text-3xl">
                    I'm a software engineer based in Brazil, specialized in 
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;