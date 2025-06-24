import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setSubmitted(false);
            }}
          />
        </label>
        <br />

        <label>
          Last Name:{" "}
          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setSubmitted(false);
            }}
          />
        </label>
        <br />

        <button type="submit">
          Submit
        </button>
      </form>
      <p>
        {submitted ? `Full Name: ${firstName} ${lastName}` : ""}
      </p>
    </div>
  );
}

export default App;
