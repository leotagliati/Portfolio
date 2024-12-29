import ContactIcon from "./ContactIcon";

function ContactList() {
    const contactsList = [{ name: "github", link: "https://github.com/leotagliati" }, { name: "instagram", link: "https://www.instagram.com/leonaart_/" },
    {name: "linkedIn", link:"https://www.linkedin.com/in/leotagliati/"}
    ]
    const contactsMap = contactsList.map(x => <ContactIcon link={x.link} iconName={x.name}></ContactIcon>)
    return (
        <>
            <div className="bg-purple-500 flex gap-3 justify-center content-center">
                {contactsMap}
            </div>
        </>
    );

}
export default ContactList;