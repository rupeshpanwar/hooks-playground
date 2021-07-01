import React, { useState } from 'react'



function App() {

  const [activated, setActivated] = useState(false)

  const buttonText = activated ? 'activated' : 'deactivated'

  function onClick() {
    setActivated(!activated)
  }

  return (
    <button onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default App;
