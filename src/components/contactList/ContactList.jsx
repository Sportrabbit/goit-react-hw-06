import css from "./ContactList.module.css";
import Contact from "../contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter} from "../../redux/filtersSlice";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter);

    const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );
    return (
        <div className={css["container-contacts"]}>
            {filteredContacts.map(({ id, number, name }) => (
                <Contact
                key={id}
                name={name}
                id={id}
                number={number}
                />
            ))}
        </div>
    );
};

export default ContactList;