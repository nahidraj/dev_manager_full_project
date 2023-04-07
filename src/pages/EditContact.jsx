import React, { useContext } from "react";
import ContactForm from "../components/conatcts/ContactForm";
import { useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactsContext";

const EditContact = () => {
  const { contacts, updateContact } = useContext(ContactContext);

  const { id } = useParams();
  const foundContact = contacts.find((contact) => contact.id === id);
  return <ContactForm contact={foundContact} updateContact={updateContact} />;
};

export default EditContact;
