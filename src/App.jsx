import { useState } from "react";
import { Container } from "react-bootstrap";
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Header from "./layouts/Header";
import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const initialContacts = [
  {
    id: "1",
    first_name: "Hilary",
    last_name: "Cromb",
    email: "hcromb0@amazon.com",
    gender: "male",
    profession: "VP Quality Control",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "20/03/2000",
    bio: "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
  },
  {
    id: "2",
    first_name: "Nanine",
    last_name: "Grabham",
    email: "ngrabham1@arizona.edu",
    gender: "Female",
    profession: "Analog Circuit Design manager",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "07/08/1987",
    bio: "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  },
  {
    id: "3",
    first_name: "Suzette",
    last_name: "Turn",
    email: "sturn2@theguardian.com",
    gender: "Female",
    profession: "Senior Editor",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "29/05/1996",
    bio: "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
  },
  {
    id: "4",
    first_name: "Calv",
    last_name: "Branchflower",
    email: "cbranchflower3@google.ca",
    gender: "male",
    profession: "Recruiter",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/10/1993",
    bio: "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
  },
  {
    id: "5",
    first_name: "Connor",
    last_name: "Cromb",
    email: "ccromb4@slashdot.org",
    gender: "male",
    profession: "Research Associate",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "05/06/1978",
    bio: "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
  },
  {
    id: "6",
    first_name: "Filip",
    last_name: "Scutching",
    email: "fscutching5@chicago.com",
    gender: "male",
    profession: "Chief Design Engineer",
    image:
      "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "11/09/1977",
    bio: "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
  },
  {
    id: "7",
    first_name: "Amby",
    last_name: "Culleton",
    email: "aculleton6@phpbb.com",
    gender: "male",
    profession: "Project Manager",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/07/1995",
    bio: "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
  },
  {
    id: "8",
    first_name: "Silvester",
    last_name: "Ivashnikov",
    email: "sivashnikov7@mayoclinic.com",
    gender: "male",
    profession: "Programmer III",
    image:
      "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "11/08/1983",
    bio: "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet",
  },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const deleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  const updateContact = (contact, id) => {
    console.log(contact, id);
  };

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    };
    setContacts([contactToAdd, ...contacts]);
  };

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <Contacts deleteContact={deleteContact} contacts={contacts} />
            }
          />
          <Route
            path="/add-contact"
            element={<AddContact addContact={addContact} />}
          />
          <Route
            path="/edit-contact/:id"
            element={
              <EditContact contacts={contacts} updateContact={updateContact} />
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
