function About(){
    return (
        <>
            <div className="my-10 grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="p-4 w-full bg-red-500">
                    <img className= "w-full " src="src\assets\img\project1Image.png" alt="" />
                </div>
                <div>
                    <h6>Hello, I'm Leo</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat ad consequuntur sed, harum veniam magni qui, est incidunt adipisci nobis tempora, quasi dolore repellat vel distinctio accusantium totam voluptatem?
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;