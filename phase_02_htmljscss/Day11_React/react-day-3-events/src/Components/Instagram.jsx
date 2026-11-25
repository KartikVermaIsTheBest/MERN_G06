import React from 'react'

const Instagram = () => {

  const openInstagram = (name) => {
    alert(`Instagram is Opening`);
  }
  
  return (
    <div>
      <button onClick={() => openInstagram("Rahul")}>Instagram</button>
    </div>
  )
}

export default Instagram
