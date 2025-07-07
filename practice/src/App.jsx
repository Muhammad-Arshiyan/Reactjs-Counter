import React from 'react'
import { useState } from 'react'
import './index.css'
const App = () => {
  const [count, setCount] = useState(0)

  function incrementValue(){
    setCount (count + 1)
  }
  function resetValue(){
    setCount (0)
  }

  function decrementValue(){
    setCount (count - 1)
  }
  return (
    <div className='box'>
      <h1>React Js Counter</h1>
      <h1>Count Value : {count}</h1>
      <div className="btn">
        <button onClick={incrementValue}>Increment</button>
      <button onClick={resetValue}>Reset</button>
      <button onClick={decrementValue}>Decrement</button>
      </div>

    </div>
  )
}

export default App