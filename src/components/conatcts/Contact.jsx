import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillTrash3Fill } from "react-icons/bs";
import { format } from "date-fns";

const Contact = ({ contact, deleteContact }) => {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    profession,
    image,
    dateOfBirth,
    bio,
  } = contact;

  return (
    <Card className="mt-4 card_list">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {first_name} {last_name}
        </Card.Title>
        <Card.Subtitle className="my-2">{profession}</Card.Subtitle>
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
      <Card.Footer>
        <Card.Link href="#">
          <Button variant="success">
            <BsFillEyeFill /> View
          </Button>
        </Card.Link>
        <Card.Link onClick={() => deleteContact(id)}>
          <Button variant="danger">
            <BsFillTrash3Fill /> Delete
          </Button>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default Contact;
