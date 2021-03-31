import ContactItem from "./ContactItem/ContactItem";

function ContactsList({ visibleContacts, onHandleDelete }) {
  return visibleContacts.map((item) => {
    return (
      <ContactItem key={item.id} item={item} HandleDelete={onHandleDelete} />
    );
  });
}

export default ContactsList;
