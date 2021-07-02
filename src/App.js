import React, { useState } from 'react'

//use custom hook - another moduler example
//create custom hook
const useCounter = (startingValue) => {
        const [count,setCount] = useState(startingValue)

        const increament = () => setCount(count + 1)
        const decreament = () => setCount(count - 1)

        return{
          count,
          increament,
          decreament
        }

}

//takes value from custom hook
const Display = (props) => {
  const {count,increament,decreament} = useCounter(props.start)

  return(   
    <div>
      <button onClick={increament}>Add</button>
      <button onClick={decreament}>Minus</button>
      {count}
    </div>   
  )
}

const App = () => {
  return (
    //components
    <div>
    
    <Display start={10} />
    <Display start={20} />
    </div>
  )
}

// //use custom Hooks
// function App() {
//   const userText = useKeyPress('something to initialize')

//   return (
//     <div>
//       <h1>Feel free to type, text will show up here</h1>
//       <blockquote>
//         {userText}
//       </blockquote>
//     </div>
//   )
// }

// function useKeyPress(startingValue) {
//   const [userText,setUserText] = useState(startingValue)

//   const handleUserKeyPress = (event) => {
//     const {key,keyCode} = event

//     if(keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
//       setUserText(`${userText}${key}`)
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('keydown',handleUserKeyPress)

//     return () => {
//       window.removeEventListener('keydown',handleUserKeyPress)
//     }
//   })

//   return userText
// }

//another example of component did unmount via useEffect
// selective state tracking via array [] in useEffect 
// function Counter() {
  
//   const [count, setCount] = useState(0)
//   const [color,setColor] = useState('salmon')

//   const handleCountAdd = () => setCount(count + 1)
//   const handleCountMinus = () => setCount(count - 1)

//   useEffect(() => {
//     console.log(`the current value of count is ${count}`)

//     return () => {
//       console.log(`removing anything up n above,last hold value is ${count}`)
//     }
//   },[count])

//   const handleChangeColor = () => {
//       const nextColor = color === 'salmon' ? 'gold' : 'salmon' 
//       setColor(nextColor)
//   }
//   return (
//     <div>
//       <div>
//         <button
//           onClick={handleCountAdd}>Add</button>
//       </div>
//       <div>
//         <button
//           onClick={handleCountMinus} >Minus</button>
//       </div>
//       <div>
//         <button onClick={handleChangeColor}>
//           Change color
//         </button>
//       </div>
//       <div>
//         <h1 style={{color}}>Current value is {`${count}`}</h1>
//       </div>
//     </div>
//   )

// }

// function App() {
//   const [visible,setVisible] = useState(false)

//   return(
//     <div>
//       <button
//       onClick={() =>setVisible(!visible)}>
//         Show me / Hide me
//       </button>

//       {visible && <Counter />}
//     </div>
//   )
// }



// //invoke useEffect

// function App() {

//   const [count, setCount] = useState(0)

//   const handleCountAdd = () => setCount(count + 1)
//   const handleCountMinus = () => setCount(count - 1)

//   useEffect(() => {
//     console.log(`the current value of count is ${count}`)

//     return () => {
//       console.log(`removing anything up n above,last hold value is ${count}`)
//     }
//   })

//   return (
//     <div>
//       <div>
//         <button
//           onClick={handleCountAdd}>Add</button>
//       </div>
//       <div>
//         <button
//           onClick={handleCountMinus} >Minus</button>
//       </div>

//       <div>
//         <h1>Current value is {`${count}`}</h1>
//       </div>
//     </div>
//   )
// }


// //ellegant way to update the state

// function App() {

//   const [city, setCity] = useState('')
//   const [country, setCountry] = useState('')
//   const handleCityChange = (event) => setCity(event.target.value)
//   const handleCountryChange = (event) => setCountry(event.target.value)

//   return (
//     <form>
//       <div>
//         <input type="text"
//           placeholder="city"
//           value={city}
//           onChange={handleCityChange} />
//       </div>
//       <div>
//         <input type="text"
//           placeholder="country"
//           value={country}
//           onChange={handleCountryChange} />
//       </div>

//       <div>
//         <h1>you live in {`${city},${country}`}</h1>
//       </div>
//     </form>
//   )
// }

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
