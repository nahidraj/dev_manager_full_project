import React from "react";
import Contact from "./Contact";
import { Row, Col } from "react-bootstrap";

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <>
      <h1 className="mt-5 contact-title">All Contacts</h1>
      <div className="pb-5">
        <Row>
          {contacts.map((contact) => (
            <Col lg="3" key={contact.id}>
              <Contact
                deleteContact={deleteContact}
                contact={contact}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Contacts;
