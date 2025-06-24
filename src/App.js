import './App.css';
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setSubmitted(false); // Do not show <p> tag
      return;
    }

    setSubmitted(true);
  };

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

        <button type="submit">Submit</button>
      </form>

      {/* ✅ This will only show when both fields are valid */}
      {submitted && (
        <p>Full Name: {firstName} {lastName}</p>
      )}
    </div>
  );
}

export default App;
