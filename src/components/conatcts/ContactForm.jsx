import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactsContext";
import FormInput from "../form/FormInput";

const schema = yup.object({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be greater then 3"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be greater then 3"),
  email: yup
    .string()
    .required("Email is required")
    .email("Valid email is required"),
  gender: yup.mixed().required("Gender is required").oneOf(["male", "female"]),
  image: yup
    .string()
    .required("Image is required")
    .url("Must be a valid image url"),
  profession: yup.string().required("Profession is required"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Bio must be greater than 10")
    .max(300, "Bio must be greater than 300"),
});

const ContactForm = ({ contact }) => {
  const { addContact, updateContact } = useContext(ContactContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const defaultValue = {
    firstName: contact?.firstName || "",
    lastName: contact?.lastName || "",
    email: contact?.email || "",
    gender: contact?.gender || "",
    profession: contact?.profession || "",
    image: contact?.image || "",
    dateOfBirth: contact?.dateOfBirth || new Date(),
    bio: contact?.bio || "",
  };

  const { firstName, lastName, email, gender, profession, bio, image } =
    defaultValue;

  const [birthYear, setBirthYear] = useState(new Date());

  useEffect(() => {
    setValue("dateOfBirth", birthYear);
  }, [birthYear]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        profession: "",
        image: "",
        dateOfBirth: new Date(),
        bio: "",
      });
    }
  }, [isSubmitSuccessful]);

  const onSubmit = (data) => {
    const id = contact?.id;
    if (id) {
      updateContact(data, id);
      toast.success("Contact Updated successfully");
    } else {
      // adding contacts
      addContact(data);
      toast.success("Contact added successfully");
    }
    navigate("/contacts");
  };

  const fields = [
    {
      name: "firstName",
      type: "text",
      label: "First Name",
      placeholder: "Enter your First name",
      defaultValue: firstName,
    },
    {
      name: "lastName",
      type: "text",
      label: "Last Name",
      placeholder: "Enter your Last name",
      defaultValue: lastName,
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "Enter your Email Addres",
      defaultValue: email,
    },
  ];

  return (
    <div className="my-5">
      <h2>{contact?.id ? "Edit Contact" : ""}</h2>
      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <Col lg={6} className="mx-auto">
            <div className="shadow p-4 bg-white">
              <h2 className="mb-4 text-center">Add Contact</h2>
              <Row>
                {fields.map((field, index) => (
                  <Col lg="12" key={index}>
                    <FormInput
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      defaultValue={field.defaultValue}
                      register={register}
                      errors={errors}
                    />
                  </Col>
                ))}

                <Col lg="12">
                  <Form.Label>Select Gender</Form.Label>
                  <div className="check-box mb-3">
                    <Form.Check
                      className="shadow-none"
                      inline
                      type="radio"
                      value="male"
                      id="male"
                      label="Male"
                      defaultChecked={gender === "male"}
                      {...register("gender")}
                    />
                    <Form.Check
                      className="shadow-none ms-2"
                      inline
                      type="radio"
                      value="female"
                      id="female"
                      label="Female"
                      defaultChecked={gender === "female"}
                      {...register("gender")}
                    />

                    <Form.Control.Feedback type="invalid" className="d-block">
                      {errors?.gender?.message}
                    </Form.Control.Feedback>
                  </div>
                </Col>

                <Col lg="12">
                  <FormInput
                    name="image"
                    type="url"
                    label="Profile picture"
                    placeholder="Enter your image url"
                    defaultValue={image}
                    register={register}
                    errors={errors}
                  />
                </Col>

                <Col lg="12">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Profession</Form.Label>

                    <Form.Select
                      defaultValue={profession}
                      isInvalid={errors?.profession}
                      {...register("profession")}
                      className="shadow-none"
                    >
                      <option value="">Select the profession</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="marketer">Marketer</option>
                    </Form.Select>

                    <Form.Control.Feedback type="invalid">
                      {errors?.profession?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col lg="12">
                  <Form.Label>Date of birth</Form.Label>
                  <DatePicker
                    className="date_picker form-control shadow-none mb-3"
                    selected={birthYear}
                    onChange={(date) => setBirthYear(date)}
                    name="dateOfBirth"
                    showMonthDropdown
                    showYearDropdown
                    maxDate={new Date()}
                  />
                </Col>

                <Col lg="12">
                  <FormInput
                    name="bio"
                    type="text"
                    as="textarea"
                    label="Bio"
                    placeholder="Enter your bio"
                    defaultValue={bio}
                    register={register}
                    errors={errors}
                  />
                </Col>
              </Row>
              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting && "disabled"}
              >
                {contact?.id ? "Update Contact" : "Add Contact"}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactForm;
