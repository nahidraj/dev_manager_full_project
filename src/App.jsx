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
import { ToastContainer, toast } from "react-toastify";
import ContactDetails from "./pages/ContactDetails";

const initialContacts = [
  {
    id: "1",
    firstName: "Hilary",
    lastName: "Cromb",
    email: "hcromb0@amazon.com",
    gender: "male",
    profession: "designer",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "20/03/2000",
    bio: "eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
  },
  {
    id: "2",
    firstName: "Nanine",
    lastName: "Grabham",
    email: "ngrabham1@arizona.edu",
    gender: "female",
    profession: "designer",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "07/08/1987",
    bio: "nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla",
  },
  {
    id: "3",
    firstName: "Suzette",
    lastName: "Turn",
    email: "sturn2@theguardian.com",
    gender: "female",
    profession: "designer",
    image:
      "https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "29/05/1996",
    bio: "habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
  },
  {
    id: "4",
    firstName: "Calv",
    lastName: "Branchflower",
    email: "cbranchflower3@google.ca",
    gender: "male",
    profession: "developer",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/10/1993",
    bio: "eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis",
  },
  {
    id: "5",
    firstName: "Connor",
    lastName: "Cromb",
    email: "ccromb4@slashdot.org",
    gender: "male",
    profession: "developer",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "05/06/1978",
    bio: "aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu",
  },
  {
    id: "6",
    firstName: "Filip",
    lastName: "Scutching",
    email: "fscutching5@chicago.com",
    gender: "male",
    profession: "developer",
    image:
      "https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "11/09/1977",
    bio: "enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
  },
  {
    id: "7",
    firstName: "Amby",
    lastName: "Culleton",
    email: "aculleton6@phpbb.com",
    gender: "male",
    profession: "marketer",
    image:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    dateOfBirth: "01/07/1995",
    bio: "nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam pede",
  },
  {
    id: "8",
    firstName: "Silvester",
    lastName: "Ivashnikov",
    email: "sivashnikov7@mayoclinic.com",
    gender: "male",
    profession: "marketer",
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
    toast.success("Contact Deleted successfully");
  };

  const updateContact = (contactToUpdate, id) => {
    const contactWithUpdate = contacts.map((contact) => {
      if (contact.id === id) {
        return {
          id: id,
          ...contactToUpdate,
        };
      } else {
        return contact;
      }
    });
    console.log(contactWithUpdate);
    setContacts(contactWithUpdate);
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
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
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
            path="/contact-details/:id"
            element={<ContactDetails contacts={contacts} />}
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
