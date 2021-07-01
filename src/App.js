import React, { useState } from 'react'

//ellegant way to update the state

function App() {

  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const handleCityChange = (event) => setCity(event.target.value)
  const handleCountryChange = (event) => setCountry(event.target.value)

  return (
    <form>
      <div>
        <input type="text"
          placeholder="city"
          value={city}
          onChange={handleCityChange} />
      </div>
      <div>
        <input type="text"
          placeholder="country"
          value={country}
          onChange={handleCountryChange} />
      </div>

      <div>
        <h1>you liv in {`${city},${country}`}</h1>
      </div>
    </form>
  )
}

//multiple pieces in useState

// function App() {
//   const [state, setState] = useState({
//     city: '',
//     country: ''
//   })

//   const handleCityChange = (event) => {
//     setState({
//       ...state, city: event.target.value
//     })
//   }

//   const handleCountryChange = (event) => {
//     setState({
//       ...state, country: event.target.value
//     })
//   }

//   return (
//     <form>
//       <div>
//         <input
//           type="text"
//           placeholder='city'
//           value={state.city}
//           onChange={handleCityChange}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder='country'
//           value={state.country}
//           onChange={handleCountryChange}
//         />
//       </div>
//       <div>
//         <h1>you live in {state.city} , {state.country}</h1>
//       </div>
//     </form>
//   )
// }


//increament test for useState

// function App() {
//   const [count, setCount] = useState(0)

//   // const handleClick = () => setCount(count + 1) //method 1

//   //method 2
//   const handleClick = () => setCount((prevCount) => {
//     return prevCount + 1;
//   })

//   const handleClickDecrement = () => setCount((prevCount) => {
//     return prevCount - 1;
//   })

//   const handleClickReset = () => setCount(0)

//   return (
//     <>
//       <button onClick={handleClick}>
//         Increase
//       </button>
//       <button onClick={handleClickDecrement}>
//         Decrease
//       </button>
//       <button onClick={handleClickReset}>
//         Reset
//       </button>
//       <h1>{count}</h1>
//     </>
//   )
// }

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
