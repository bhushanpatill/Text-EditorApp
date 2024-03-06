// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState("light");
  const togglemode = () =>{
    if(mode === "dark"){
      setmode("light")
    }
    else{
      setmode("dark")
    }
  }
  return (
    <>
      <Navbar text = "Text-Editor" mode = {mode} toggleMode = {togglemode}/>
      <Textarea heading = "Enter your text below"/>
    </>
  );
}

export default App;
