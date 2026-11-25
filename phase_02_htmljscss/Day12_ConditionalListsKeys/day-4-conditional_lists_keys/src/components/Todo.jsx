import React, { useState } from 'react'

const Todo = () => {
  const [task , setTask] = useState('');
  const [todos , setTodos] = useState([]);
  const handleClick = () => {
    const newTodo = {id : Date.now() , task : task , status : false}
    
    setTodos([...todos , newTodo])
  }

  const handleDelete = (id) => {
    console.log(id);
    const updateTodos = todos.filter((el) => el.id != id)
    setTodos(updateTodos)
  }

  return (
    <div>
        <div>
            <input type="text" value = {task} onChange={(e) => setTask(e.target.value)} placeholder='Enter Todo'/>
            <button onClick={handleClick}>Submit</button>
        </div>
        <div style={{
            width:"500px",
            border:"1px solid black",
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            {
                todos.map((el) => {
                    return <div style={{
                        display:"flex",
                        gap:"10px"
                    }}>
                        <h2 >{el.task}</h2>
                        <button onClick={() => handleDelete(el.id)}>Delete</button>
                    </div>
                })
            }
        </div>
    </div>
    
  )
}

export default Todo
