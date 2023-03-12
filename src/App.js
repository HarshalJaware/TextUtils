import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (msg,type) =>{
    setAlert({
      message:msg,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const toggleSwitchMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert('Dark mode has been enabled!!!','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled!!!','success');
    }
  }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleSwitchMode={toggleSwitchMode}/>
      <div className='container my-3'>  
        <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
        <Alert alert={alert}/>
        {/* <About /> */}
        </div>
      {/* <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact</div>}></Route> */}

        {/* 
        <Alert alert={alert}/>
        <div className='container my-3'>   
        </div> */}
        {/* </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
