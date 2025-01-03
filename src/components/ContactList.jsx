import ContactIcon from "./ContactIcon";

function ContactList() {
    const contactsList = [{ name: "github", link: "https://github.com/leotagliati" }, { name: "instagram", link: "https://www.instagram.com/leonaart_/" },
    { name: "linkedin", link: "https://www.linkedin.com/in/leotagliati/" }
    ]
    const contactsMap = contactsList.map((x, index) =>
        <ContactIcon
            key={index} // Adicione uma `key` única para cada item
            link={x.link}
            iconName={x.name}
        ></ContactIcon>)
    return (
        <>
            <div className=" flex gap-3 justify-center content-center">
                {contactsMap}
            </div>
        </>
    );

}
export default ContactList;