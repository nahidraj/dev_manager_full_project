import React from "react";
import { Form } from "react-bootstrap";

const FormInput = ({
  name,
  type = "text",
  label,
  placeholder,
  defaultValue,
  register,
  errors,
  ...rest
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        defaultValue={defaultValue}
        className="shadow-none"
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        isInvalid={errors[name]}
        {...rest}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]?.message}
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default FormInput;
