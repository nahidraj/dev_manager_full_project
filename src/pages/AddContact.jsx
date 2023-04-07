import React, { useContext } from "react";
import ContactForm from "../components/conatcts/ContactForm";
import { ContactContext } from "../context/ContactsContext";

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  return <ContactForm addContact={addContact} />;
};

export default AddContact;
