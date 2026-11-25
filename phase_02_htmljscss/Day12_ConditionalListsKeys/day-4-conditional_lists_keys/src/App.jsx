import React from 'react'
import Dashboard from './components/Dashboard'
import LoginPage from './components/LoginPage'
import Students from './components/Students'
import Todo from './components/Todo'

const App = () => {
  const age = 17
  const loggedIn = true
  // if(age >= 18){
  //   return <h1>Person can Vote</h1>
  // }
  // else{
  //   return <h1>Person is not eligible</h1>
  // }

  return (
    <div>
      {
        // loggedIn ?
        // <Dashboard/> :
        // <LoginPage/>

        // <Students/>
        <Todo/>
      }
    </div>
  )
}

export default App
