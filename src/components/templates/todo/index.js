import React, { useState, useContext } from 'react'

import { useToDoStore, ToDoContext } from '../../../stores/todo'

const ToDoTemplate = () => {
  const [{ toDo }, dispatch] = useContext(ToDoContext) //useToDoStore()
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <div>
        <input
          onChange={e => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button
          onClick={() => dispatch({ type: 'ADD_TO_DO', payload: inputValue })}
        >
          Add todo
        </button>
      </div>
      <div>
        <div>
          {toDo.items.map((item, idx) => (
            <div key={idx}>
              {item}{' '}
              <a
                href="#"
                onClick={() => dispatch({ type: 'DELETE_TO_DO', payload: idx })}
              >
                delete
              </a>
            </div>
          ))}
        </div>
        <div>count: {toDo.count}</div>
      </div>
    </div>
  )
}

export default ToDoTemplate

// import React, { useState } from 'react'

// function Increment({ initialCount = 0 }) {
//   const [count, setCount] = useState(initialCount)

//   return (
//     <button onClick={() => setCount(prevCount => prevCount + 1)}>
//       Increment: {count}
//     </button>
//   )
// }

// export default Increment

// import React, { useState } from 'react'

// function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   )
// }

// export default Example
