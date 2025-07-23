import React from 'react'
import './App.css'
import Users from "./components/Users/Users"

function App() {
  const users = ["A", "B", "C"];

  return (
    <>
      <h1>Testing in React</h1>
      <Users users={users} />
    </>
  )
}

export default App
