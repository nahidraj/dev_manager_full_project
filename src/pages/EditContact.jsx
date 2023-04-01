import React from "react";
import ContactForm from "../components/conatcts/ContactForm";
import { useParams } from "react-router-dom";

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const foundContact = contacts.find((contact) => contact.id === id);
  return <ContactForm contact={foundContact} updateContact={updateContact} />;
};

export default EditContact;
