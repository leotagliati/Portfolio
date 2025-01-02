function ContactIcon({ link, iconName }) {
    let path = `./src/assets/img/${iconName}.png`;

    return (
        <>
            <a href={link}>
                <img className="h-16 w-16" src={path} alt="" />
            </a>
        </>
    );
}
export default ContactIcon;