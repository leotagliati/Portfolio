function ContactIcon({ link, iconName }) {
    let path = `./src/assets/img/${iconName}`;

    return (
        <>
            <a href={link}>
                <img className="p-5 bg-red-600" src={path} alt="" />
            </a>
        </>
    );
}
export default ContactIcon;