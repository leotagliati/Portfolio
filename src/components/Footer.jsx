function Footer() {
    let actualYear =  Date().getFullYear
    return (
        <>
            <p className="font-pixelify">&copy; {actualYear} My portfolio</p>
        </>
    );
}
export default Footer