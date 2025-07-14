import { useState, useRef, useEffect } from "react";
import "./Contact.css";
import Button from "../Button/Button";
import { validateEmail, validateSubject } from "../../utils/validations";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const inputSubjectRef = useRef(null);

  const HandleChangeInputSubject = (event) => {
    if (validateSubject(event.target.value)) {
      setSubject(event.target.value);
      setErrors({
        ...errors,
        subject: null,
      });
    } else {
      setErrors({
        ...errors,
        subject: "Subject must be more than 8 characters",
      });
    }
  };

  const HandleChangeInputEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setErrors({
        ...errors,
        email: null,
      });
    } else {
      setErrors({
        ...errors,
        email: "Email is not valied",
      });
    }
  };

  const HandleChangeTextarea = (event) => {
    setDescription(event.target.value);
  };

  const HandleSubmit = () => {
    console.log("subject", subject);
    console.log("email", email);
    console.log("description", description);
  };

  useEffect(() => {
    inputSubjectRef.current.focus();
  });

  return (
    <div className="contact">
      <div className="formControl">
        <input
          ref={inputSubjectRef}
          onChange={HandleChangeInputSubject}
          type="text"
          placeholder="subject"
        />
        {errors.subject && <span>{errors.subject}</span>}
      </div>
      <div className="formControl">
        <input
          onChange={HandleChangeInputEmail}
          type="email"
          placeholder="email"
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className="formControl">
        <textarea onChange={HandleChangeTextarea}>Your Request Here</textarea>{" "}
      </div>
      <div className="formControl"></div>
      <Button HandleClick={HandleSubmit}>Submit</Button>
    </div>
  );
};

export default Contact;
