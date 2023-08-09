import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

/* const loginDataInitial = {
  fullname: ""
  email: "",
  password: "",
  terms: false,
  role: null,
};

const roles = [
  { label: "Yönetici", value: "admin" },
  { label: "Yazar", value: "Writer" },
  { label: "Okur", value: "Reader" },
]; */

function FormMaker() {
  const handleSubmit = (e) => {
    e.prevenetDefault();
  };
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <FormGroup>
        <Label for="exampleFullname">
          Fullname{" "}
          <Input
            id="exampleFullname"
            name="Fullname"
            placeholder="with a placeholder"
            type="Fullname"
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">
          Email{" "}
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
          />
        </Label>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input id="exampleSelect" name="select" type="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>

      <FormGroup check>
        <Input type="checkbox" /> <Label check>Check me out</Label>
      </FormGroup>
    </Form>
  );
}

export default FormMaker;
