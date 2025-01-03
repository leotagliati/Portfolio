import { useRef, useEffect } from "react";

function Parallax() {
    const starsRef = useRef(null);
    const smoke1Ref = useRef(null);
    const smoke2Ref = useRef(null);
    const smoke3Ref = useRef(null);
    const mountainsRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;

            if (starsRef.current) {
                starsRef.current.style.top = value + "px";
            }
            if (smoke1Ref.current) {
                smoke1Ref.current.style.top = value * 0.8 + "px";
            }
            if (smoke2Ref.current) {
                smoke2Ref.current.style.top = value * 0.6 + "px";
            }
            if (smoke3Ref.current) {
                smoke3Ref.current.style.top = value * 0.4 + "px";
            }
            if (mountainsRef.current) {
                mountainsRef.current.style.top = value * 0.2 + "px";
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative overflow-hidden h-screen">
            <img
                src="src/assets/img/Parallax/Parallax1.png"
                alt=""
                ref={starsRef}
                className="w-full absolute"
            />
            <img
                src="src/assets/img/Parallax/Parallax2.png"
                alt=""
                ref={smoke1Ref}
                className="w-full absolute"
            />
            <img
                src="src/assets/img/Parallax/Parallax3.png"
                alt=""
                ref={smoke2Ref}
                className="w-full absolute translate-y-48"
            />
            <img
                src="src/assets/img/Parallax/Parallax4.png"
                alt=""
                ref={smoke3Ref}
                className="w-full absolute translate-y-64"
            />
            <img
                src="src/assets/img/Parallax/Parallax5.png"
                alt=""
                ref={mountainsRef}
                className="w-full absolute translate-y-96"
            />
        </div>
    );
}

export default Parallax;
