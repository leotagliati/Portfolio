function About() {
    return (
        <>
            <div className="bg-purple-leo my-10 grid gap-4 grid-cols-1  md:grid-cols-2">
                <div className="p-4 w-full">
                    <img className="w-full " src="src\assets\img\profileImage.png" alt="" />
                </div>
                <div className="p-3">
                    <h6 className="mt-12 mr-3 text-cream-leo  h-14 text-5xl font-pixelify">Hello, I'm Leo!</h6>
                    <p className="my-5 mr-3 text-cream-leo  font-pixelify text-3xl">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur adipisci ducimus iusto doloribus commodi amet quod odio veniam cupiditate suscipit doloremque architecto obcaecati modi assumenda, saepe culpa asperiores exercitationem aliquid!Lorem ipsum dolor sit amet, consectetur adipisicing elit. At fugiat ad consequuntur sed, harum veniam magni qui, est incidunt adipisci nobis tempora, quasi dolore repellat vel distinctio accusantium totam voluptatem?
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;