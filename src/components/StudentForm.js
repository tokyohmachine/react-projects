import React, {useState} from 'react';
import styles from './StudentForm.module.css'

export default function StudentForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [studentId, setStudentId] = useState('');
  const [textarea, setTextarea] = useState('');
  
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  function handleClassNumberChange(e) {
    setClassNumber(e.target.value);
  }

  function handleStudentIdChange(e) {
    setStudentId(e.target.value);
  }


  function handleTextAreaChange(e) {
    setTextarea(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here
  }

  return (
  
  <div className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.h1}>React's Student Form</h1>
      
    </header>
   

  <form className={styles.form}>
    <div className={styles.formGroup}>
        <label htmlFor="first_name" className={styles.label}>First Name
          <input className={styles.input} id="first_name" type="text" onChange={handleFirstNameChange} value={firstName} placeholder="Enter your first name" required/>
        </label>

        <label htmlFor="last_name" className={styles.label}>Last Name
          <input className={styles.input} id="last_name" type="text" onChange={handleLastNameChange} value={lastName} placeholder="Enter your last name" required/>
        </label>

        <label id="email-label" for="email">Email
          <input className={styles.input} id="email" name="mail" type="email" onChange={handleEmailChange} value={email} placeholder="Enter you email" required />
        </label>

        <label htmlFor="age" className={styles.label}>Age
          <input className={styles.input} id="age" type="number" onChange={handleAgeChange} value={age} placeholder="Age" required min="13" max="120"/>
        </label>

        <label htmlFor="address" className={styles.label}>Address
          <input className={styles.input} id="address" type="text" onChange={handleAddressChange} value={address} />
        </label>

        <label htmlFor="class_number" className={styles.label}>Homeroom class number
          <input className={styles.input} id="class_number" type="number" onChange={handleClassNumberChange} value={classNumber} />
        </label>

        <label htmlFor="student_id" className={styles.label}>Student ID
          <input className={styles.input} id="student_id" type="number" onChange={handleStudentIdChange} value={studentId} />
        </label>
        

        
        <p className={styles.p}>Message</p>
        <textarea className={styles.textarea} name="comment" onChange={handleTextAreaChange} value={textarea} placeholder="Enter your comment here..."></textarea>
      

        <button className={styles.button} type="submit" onChange={handleSubmit}>Submit</button>
      </div>
      </form>
  </div>
  
  );
}