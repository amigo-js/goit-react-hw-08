import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useAppDispatch } from "../../redux/hooks";
import { addContact, deleteContact } from "../../redux/contacts/operations";
import styles from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useAppDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={styles.container}>
      <h2>Your Contacts</h2>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox />
      <ContactList onDelete={handleDeleteContact} />
    </div>
  );
}
