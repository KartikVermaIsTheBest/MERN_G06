import React from 'react'

const StudentCard = ({std}) => {
  return (
    <div>
        <img src={std.url} alt="" />
        <h1>Name : {std.name}</h1>
        <h3>Email : {std.email}</h3>
        <h3>Age : {std.age}</h3>
    </div>
  )
}

export default StudentCard
