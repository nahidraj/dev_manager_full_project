import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";

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

const AddContact = ({ addContact }) => {
  // const [contact, setContact] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   gender: "male",
  //   profession: "",
  //   image: "",
  //   dateOfBirth: new Date(),
  //   bio: "",
  // });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

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

  const onSubmit = (data) => console.log(data);

  return (
    <div className="mt-5">
      <h2>Add Contact</h2>
      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                defaultValue=""
                {...register("firstName")}
                placeholder="Enter your first name"
                isInvalid={errors?.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.firstName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                defaultValue=""
                {...register("lastName")}
                placeholder="Enter your last name"
                isInvalid={errors?.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.lastName?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                className="shadow-none"
                type="email"
                defaultValue=""
                {...register("email")}
                placeholder="Enter your email"
                isInvalid={errors?.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Label>Select Gender</Form.Label>
            <div className="check-box">
              <Form.Check
                className="shadow-none"
                inline
                type="radio"
                value="male"
                id="male"
                label="Male"
                {...register("gender")}
              />
              <Form.Check
                className="shadow-none ms-2"
                inline
                type="radio"
                value="female"
                id="female"
                label="Female"
                {...register("gender")}
              />
            </div>
            <Form.Control.Feedback type="invalid" className="d-block">
              {errors?.gender?.message}
            </Form.Control.Feedback>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profile picture</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                defaultValue=""
                {...register("image")}
                placeholder="Enter your image url"
                isInvalid={errors?.image}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.image?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Profession</Form.Label>
              <Form.Control
                className="shadow-none"
                type="text"
                defaultValue=""
                {...register("profession")}
                placeholder="Enter your profession"
                isInvalid={errors?.profession}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.profession?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          <Col lg="6">
            <DatePicker
              className="date_picker form-control shadow-none"
              selected={birthYear}
              onChange={(date) => setBirthYear(date)}
              name="dateOfBirth"
              showMonthDropdown
              showYearDropdown
              maxDate={new Date()}
            />
          </Col>

          <Col lg="6">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                defaultValue=""
                {...register("bio")}
                placeholder="Enter your bio"
                isInvalid={errors?.bio}
              />
              <Form.Control.Feedback type="invalid">
                {errors?.bio?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button
          variant="primary"
          type="submit"
          disabled={isSubmitting && "disabled"}
        >
          Add Contact
        </Button>
      </Form>
    </div>
  );
};

export default AddContact;
