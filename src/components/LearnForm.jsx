import { useState } from "react";

const LearnForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Handle Form on Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button Clicked", formData);
  };

  return (
    <>
      {/* Handle element one by one */}
      <h1>Learn Form</h1>
      <h2>Handling element one by one </h2>
      <form action="">
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />{" "}
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />{" "}
        <br />
        <br />
      </form>

      {/* Handle all elements at once */}
      <h2>Handling all elements at once</h2>
      <form action="" onSubmit={handleFormSubmit}>
        First Name:{" "}
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        Last Name:{" "}
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />{" "}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <hr />
    </>
  );
};

export default LearnForm;
