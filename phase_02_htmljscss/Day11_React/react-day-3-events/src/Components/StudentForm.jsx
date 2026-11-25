import React, { useState } from 'react'
import StudentCard from './StudentCard';

const StudentForm = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [age , setAge] = useState(17);
  const [url , setUrl] = useState("");

  const [student , setStudent] = useState(null);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(name,email,age,url);
    setStudent({
        name,
        email,
        age,
        url
    })
  }

  return (
    <div style={{
        border:"1px solid black",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "500px"
    }}>        <form onSubmit={handleForm}>
        <label htmlFor="">Name: </label>
        <input type="text" value = {name} onChange={(e) => {setName(e.target.value)}}/>
        <br />
        <label htmlFor="">Email: </label>
        <input type="text" value = {email} onChange={(e) => {setEmail(e.target.value)}}/>
        <br />
        <label htmlFor="">Age: </label>
        <input type="text" value = {age} onChange={(e) => {setAge(e.target.value)}}/>
        <br />
        <label htmlFor="">Image url: </label>
        <input type="text" value = {url} onChange={(e) => {setUrl(e.target.value)}}/>
        <br />
        <input type="submit" />
        </form>
        {
            student &&  <StudentCard std={student}/>
        }
    </div>
  )
}

export default StudentForm
