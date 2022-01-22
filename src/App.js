
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');//whether dark mode enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (massage , type)=>{
         setAlert(
           {
             msg:massage,
             type:type
           }
         )

          setTimeout(() => {
            setAlert(null)
          }, 1500);
  }



  const toggelMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor ='grey'
      showAlert("dark mode has enabled","success");
      document.title='textutils-dark mode enabeld'

      //flashing title after some time interval
      // setInterval(() => {
      //    document.title='install textutils now'
      // }, 1000);
     
    }
    else{
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode has been enables","success")
      
    }
  }
  return (
    <>
     <BrowserRouter>

      {/* <Navbar title="Navbar" aboutHome="indaco"/> */}
      <Navbar title="Navbar" mode={mode} toggelMode={toggelMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>

      <div className="container mb-3">

      {/* <TextForm Heading = "Enter The text to analyse Below"  mode={mode} showAlert={showAlert}/> */}
      {/* <About/> */}


       <Routes>
        <Route exact path="/" element={<TextForm Heading = "Enter The text to analyse Below"  mode={mode} showAlert={showAlert}/>} />
        <Route exact path="about/*" element={<About mode={mode}/>} />
      </Routes>
   
      </div>

     </BrowserRouter>
           
        
           
         
    </>
  );
}

export default App;
