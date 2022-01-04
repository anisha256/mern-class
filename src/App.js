import React, { useState, useRef, useEffect } from 'react';
import Particular from './Particular';
import { sampleStudents } from './constant';
import './App.css';

// const arr = [{ name: 'a' }, { name: 'b' }]
//props


function App() {
  const [students, setStudents] = useState(sampleStudents);

  const [newStudentName, setNewStudentName] = useState('')
  const [newStudentGender, setNewStudentGender] = useState('')
  const [newStudentAge, setNewStudentAge] = useState(0.00)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(students.reduce((a, v) => a + +v.age, 0));
  }, [students])

  const studentNameRef = useRef(null);
  const studentGenderRef = useRef(null);
  const studentAgeRef = useRef(null);



  const handlePressEnter = e => {
    if (e.code === 'Enter') {
      studentGenderRef.current.focus();
    }
  }

  const handlePressEnterAtStudentGender = e => {
    if (e.code === 'Enter') {
      studentAgeRef.current.focus();
    }
  }
  const handlePressEnterAtStudentAge = e => {
    if (e.code === 'Enter') {
      addNewStudent();
    }
  }

  const handleOnEdit = e =>{
    console.log("anisha");
    setNewStudentName();
    setNewStudentAge();
  
  }

  const addNewStudent = () => {
    setStudents([...students, {
      name: newStudentName,
      gender: newStudentGender,
      age: newStudentAge
    },
    ]);
    setNewStudentName('');
    setNewStudentGender('');
    setNewStudentAge(0);
    studentNameRef.current.focus();
  };

  const removeStudent = (e, name) => {
   setStudents( students.filter(
      f => f.name !== name
    ))
  }



  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
          {arr.map(a => (
            <p key={a.name}>{a.name}</p>
          ))}
        </a> */}

      </header>
      <div className="student-container">
        {
          //i for index of symbolno
          students.map((s, i) => (
            //props //</> no child 
            //   <Particular student={s} key={s.name} sn={i + 1} />
            <Particular 
            title={s.name} 
            age={s.age} 
            gender={s.gender} 
            key={s.name} 
            sn={i + 1}
            onRemove={removeStudent}
            onEdit={handleOnEdit}
            />
          ))}
        <Particular 
        title={'total'} 
        age={total} />

        {/* INPUT CONTAINER START  */}
        <div className="input-container">
          <div className="name-input">
            <input 
            ref={studentNameRef} 
            type="text" 
            placeholder='student name' 
            value={newStudentName} 
            onChange={e => setNewStudentName(e.target.value)}
            onKeyPress={handlePressEnter}
            >
            </input>

          </div>
          <div className="gender-input">
            <input
              ref={studentGenderRef}
              type="text"
              placeholder='gender'
              value={newStudentGender}
              onChange={e => setNewStudentGender(e.target.value)}
              onKeyPress={handlePressEnterAtStudentGender}
            >
            </input>

          </div>
          <div className="age-input">
            <input
              onKeyPress={handlePressEnterAtStudentAge}
              ref={studentAgeRef} 
              type="number" 
              placeholder='age' 
              value={newStudentAge} 
              onChange={e => setNewStudentAge(e.target.value)}
              >
            </input>

          </div>

          <div className="add-record">
            <button onClick={e => addNewStudent()}>
              <span>Add Students</span>
            </button>

          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
