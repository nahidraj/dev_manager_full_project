import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsFillEyeFill, BsFillTrash3Fill } from "react-icons/bs";
import { AiTwotoneEdit } from "react-icons/Ai";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Contact = ({ contact, deleteContact }) => {
  const {
    id,
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
    <Card className="mt-4 card_list">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Subtitle className="my-2">
          Prof:{profession[0].toUpperCase() + profession.slice(1)}
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
      <Card.Footer>
        <Card.Link as={Link} to={`/contact-details/${id}`}>
          <Button variant="success">
            <BsFillEyeFill />
          </Button>
        </Card.Link>
        <Card.Link as={Link} to={`/edit-contact/${id}`}>
          <Button variant="info" className="text-white">
            <AiTwotoneEdit />
          </Button>
        </Card.Link>
        <Card.Link onClick={() => deleteContact(id)}>
          <Button variant="danger">
            <BsFillTrash3Fill />
          </Button>
        </Card.Link>
      </Card.Footer>
    </Card>
  );
};

export default Contact;
