import React, { useContext } from "react";
import Contact from "../components/conatcts/Contact";
import { Row, Col } from "react-bootstrap";
import { ContactContext } from "../context/ContactsContext";

const Contacts = () => {
  const {contacts} = useContext(ContactContext)

  return (
    <>
      {Object.keys(contacts).length === 0 ? (
        <div
          className="d-grid justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h1 className="mt-5 contact-title">No Contact</h1>
        </div>
      ) : (
        <>
          <h1 className="mt-5 contact-title">All Contacts</h1>
          <div className="pb-5">
            <Row>
              {contacts.map((contact) => (
                <Col lg="3" key={contact.id}>
                  <Contact contact={contact} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default Contacts;
