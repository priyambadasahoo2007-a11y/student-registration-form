
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  return (
    <div className="box">
      <h1>Student Registration</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button>Submit</button>

      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default App;
