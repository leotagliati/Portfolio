function Footer() {
    let actualYear =  Date().getFullYear
    return (
        <>
            <p className="font-pixelify text-cream-leo">&copy; {actualYear} My portfolio</p>
        </>
    );
}
export default Footer