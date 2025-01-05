function ContactIcon({ link, iconName }) {
    let path = `.assets/img/${iconName}-icon.png`;

    return (
        <>
            <a href={link}>
                <img className="h-16 w-16" src={path} alt="" />
            </a>
        </>
    );
}
export default ContactIcon;