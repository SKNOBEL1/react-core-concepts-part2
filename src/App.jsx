import Counter  from './Counter';
import Batsman from './Batsman';
import Users from './Users';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

function App() {

function handleClick(){
  alert('I am am clicked.')
}

const handleClick3 = () => {
  alert('clicked 3')
}

const handleAdd5 = (num) => {
  const newNum = num + 5;
  alert(newNum);
}

  return (
    <>
     
      <h3>Vite + React</h3>

       <Users></Users>
      <Batsman></Batsman>
      <Counter></Counter>

     {/* <button onClick="handleClick()">click Me</button> */}
     <button  onClick={handleClick}>click Me</button>
     <button onClick={function handleClick2(){alert('clicked 2')}}>Click Me2</button>
    <button onClick={handleClick3}>Click Me 3</button>
    <button onClick={() => alert('clicked 4')}>Click Me 4</button>
    <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  )
}

export default App
