import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
/* import Button from "react-bootstrap/Button"; */

const loginDataInitial = {
  email: "",
  password: "",
  rememberMe: false,
  terms: false,
  role: null,
};

const roller = [
  { label: "Administrator", value: "admin" },
  { label: "Writer", value: "Writer" },
  { label: "Reader", value: "Reader" },
];

const FormMaker = () => {
  const [loginData, setLoginData] = useState(loginDataInitial);
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    terms: "",
    rememberMe: "",
    option: "",
    role: "",
  });
  const [isFormValid, setFormValid] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Not an email")
      .required("Please enter your e-mail"),
    /* .test("is-jimmy", "Ama bu Jimmy değil!", (value, context) => {
        // custom validation
        // return true | false
        return value.toLowerCase().includes("jimmy");
      }) */ password: Yup.string()
      .required("Password is Required")
      .min(8, "Passwords must be at least 8 characters long."),
    terms: Yup.boolean().oneOf([true], "You must accept Terms and Conditions"),
    rememberMe: Yup.boolean(),
    role: Yup.string().required("Choose wisely"),
    option: Yup.string().oneOf(
      ["1", "2", "3"],
      "You must select one of options."
    ),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submit Edildi! ", loginData);

    axios
      .post("https://reqres.in/api/users", loginData)
      .then(({ data }) => console.log(data));
      .then()
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setLoginData({
      ...loginData,
      [name]: inputValue,
    });

    validateFormField(e);
  };

  const validateFormField = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    Yup.reach(formSchema, name)
      .validate(inputValue)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("Login Data > ", loginData);
    formSchema.isValid(loginData).then((valid) => setFormValid(valid));
  }, [loginData]);

  useEffect(() => {
    console.error("[Form Validation Error State Updated] ", formErrors);
  }, [formErrors]);

  useEffect(() => {
    //component did mount
    const name = "option";
    Yup.reach(formSchema, name)
      .validate("")
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  }, []);

  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <h2>Login Form</h2>
      <hr />
      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <Input
          id="user-mail"
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          // onBlur={validateFormField}
          placeholder="Here comes to Email"
          invalid={!!formErrors.email}
        />
        <FormFeedback>{formErrors.email}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <Input
          id="user-pass"
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleInputChange}
          invalid={!!formErrors.password}
        />
        <FormFeedback>{formErrors.password}</FormFeedback>
      </FormGroup>
      <FormGroup check>
        <Label htmlFor="remember-me">Remember Me</Label>
        <Input
          id="remember-me"
          type="checkbox"
          name="rememberMe"
          checked={loginData.rememberMe}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup check>
        <Label htmlFor="terms">Terms</Label>
        <Input
          id="terms"
          type="checkbox"
          name="terms"
          checked={loginData.terms}
          onChange={handleInputChange}
          invalid={!!formErrors.terms}
        />
        <FormFeedback>{formErrors.terms}</FormFeedback>
      </FormGroup>

      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={1}
              onChange={handleInputChange}
              invalid={!!formErrors.option}
            />{" "}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={2}
              onChange={handleInputChange}
              invalid={!!formErrors.option}
            />{" "}
            Option two can be something else and selecting it will deselect
            option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input
              type="radio"
              name="option"
              value={3}
              onChange={handleInputChange}
              invalid={!!formErrors.option}
            />{" "}
            Option three is disabled
          </Label>
        </FormGroup>
        {formErrors.option && (
          <div class="invalid-feedback" style={{ display: "block" }}>
            {formErrors.option}
          </div>
        )}
      </FormGroup>
      <FormGroup>
        <Label for="role-select">Role</Label>
        <Input
          type="select"
          name="role"
          id="role-select"
          onChange={handleInputChange}
          invalid={!!formErrors.role}
        >
          <option value="">Select your role</option>
          {roller.map((rolItem, i) => {
            return (
              <option key={i} value={rolItem.value}>
                {rolItem.label}
              </option>
            );
          })}
        </Input>
        <FormFeedback>{formErrors.role}</FormFeedback>
      </FormGroup>
      <br />
      <button
        type="button"
        onClick={() => {
          setLoginData(loginDataInitial);
        }}
      >
        Reset Form
      </button>
      <button type="submit" disabled={!isFormValid}>
        Login
      </button>
    </Form>
  );
};

export default FormMaker;
