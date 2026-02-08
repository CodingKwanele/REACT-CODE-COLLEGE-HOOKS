import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Products from './Product';

function formatName(user)
{
  return user.firstName + ' ' + user.lastName;
}

function App() {

  const user = {
    firstName: 'Kwanele',
    lastName : 'Dladla'
  };
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Hello, {formatName(user)}

        <h1>Learn React</h1>
        <Products />
      </div>
      
      
    
    </>
  )
}

export default App
