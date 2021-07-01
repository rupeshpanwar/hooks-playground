import React, { useState } from 'react'

//increament test for useState

function App() {
  const [count, setCount] = useState(0)

  // const handleClick = () => setCount(count + 1) //method 1

  //method 2
  const handleClick = () => setCount((prevCount) => {
    return prevCount + 1;
  })

  return (
    <>
      <button onClick={handleClick}>
        Increase
      </button>
      <h1>{count}</h1>
    </>
  )
}

//invoke useState
// function App() {

//   const [activated, setActivated] = useState(false)

//   const buttonText = activated ? 'activated' : 'deactivated'

//   function onClick() {
//     setActivated(!activated)
//   }

//   return (
//     <button onClick={onClick}>
//       {buttonText}
//     </button>
//   );
// }


export default App;
