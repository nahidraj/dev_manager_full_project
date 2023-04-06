import { Container } from "react-bootstrap";
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditContact from "./pages/EditContact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";
import ContactDetails from "./pages/ContactDetails";

function App() {
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
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/add-contact" element={<AddContact />} />
          <Route path="/contact-details/:id" element={<ContactDetails />} />
          <Route path="/edit-contact/:id" element={<EditContact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
