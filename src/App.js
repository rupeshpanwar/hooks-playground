import logo from './logo.svg';
import './App.css';

function Box(props){
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

function App() {
  return (
   <Box
     name="Rupesh"
     subtitle= "Panwar"
   />
  );
}

export default App;
