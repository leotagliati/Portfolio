function Footer() {
    let actualYear =  Date().getFullYear
    return (
        <>
            <p>&copy; {actualYear} My portfolio</p>
        </>
    );
}
export default Footer