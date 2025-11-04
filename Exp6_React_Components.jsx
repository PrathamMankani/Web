import React, { useState } from "react";

function Student(props) {
  return <li>{props.name}</li>;
}

function App() {
  const [students, setStudents] = useState(["demotext1", "demotext2"]);

  const addStudent = () => setStudents([...students, "New Student"]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s, index) => (
          <Student key={index} name={s} />
        ))}
      </ul>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}

export default App;

# Libraries required: react, react-dom
