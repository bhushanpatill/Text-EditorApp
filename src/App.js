// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, {useState} from 'react'

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const setAlertValue = (type,msg) => {
      setalert({
        type:type,
        msg:msg
      })

      setTimeout(()=>{
          setalert(null)
      },2000)
  }
  const togglemode = () =>{
    if(mode === "dark"){
      setmode("light");
      document.body.style.backgroundColor = "cyan";
      setAlertValue("success" , "Light mode enabled");
  
    }
    else{
      setmode("dark")
      document.body.style.backgroundColor = "#19032F";
      setAlertValue("success" , "Dark mode enabled");
    }
  }
  return (
    <>
    <div>
        <Navbar text = "Text-Editor"  mode = {mode} toggleMode = {togglemode}/>
        <Alert alert = {alert} />
        <Textarea alert = {alert} setAlertValue = {setAlertValue} heading = "Enter your text below" mode = {mode} toggleMode = {togglemode}/>
    </div>

    </>
  );
}

export default App;
