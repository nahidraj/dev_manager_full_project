import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup, Row, Col } from "react-bootstrap";
import { format } from "date-fns";
const ContactDetails = ({ contacts }) => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const foundContact = contacts.find((contact) => contact.id === id);

  useEffect(() => {
    if (id && foundContact) {
      setContact(foundContact);
    }
  }, [id]);

  const {
    firstName,
    lastName,
    email,
    gender,
    profession,
    image,
    dateOfBirth,
    bio,
  } = contact;

  return (
    <>
      {Object.keys(contact).length === 0 ? (
        <div
          className="d-grid justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h1 className="mt-5 contact-title">No Contact Found</h1>
        </div>
      ) : (
        <>
          <h2 className="mb-5 mt-5">Contact Details</h2>
          <Card className="mt-4 card_list card-details">
            <Row>
              <Col sm={4}>
                <Card.Img variant="top" src={image} />
              </Col>
              <Col sm={8}>
                <Card.Body>
                  <Card.Title>
                    {firstName} {lastName}
                  </Card.Title>
                  <Card.Subtitle className="my-2">
                    Prof:{profession}
                  </Card.Subtitle>
                  <Card.Text>{bio}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Email: {email}</ListGroup.Item>
                  <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                  <ListGroup.Item>
                    Dob:{" "}
                    {dateOfBirth instanceof Object
                      ? format(dateOfBirth, "dd/MM/yyyy")
                      : dateOfBirth}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </>
      )}
    </>
  );
};

export default ContactDetails;
