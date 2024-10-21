import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useAppSelector } from "../../redux/hooks";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export default function ContactList({ onDelete }) {
  const contacts = useAppSelector(selectFilteredContacts);

  return (
    <div className={styles.container}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </div>
  );
}
