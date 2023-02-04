
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'; 
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const [color, setColor] = useState('light')
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#665e5e";
      showAlert("Dark Mode is Open", "success")
      document.title = "UtilsText-Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Open", "success")
      document.title = "UtilsText-Light Mode"

    }
  }
  const toggleColor = (event) => {

    setColor(event.target.value)
    document.body.style.backgroundColor = event.target.value;
    setMode('dark')
    showAlert("Chosen Color is Done", "success")
    console.log("Color Chosen", event.target.value)
  }

  return (
    <>
      {/* <Router> */}
    <div className="container">
        <Navbar title="UtilsText" aboutText="About Us" color={color} mode={mode} toggleMode={toggleMode} toggleColor={toggleColor} />
        <Alert alert={alert} />
        <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />

      </div>
        <div className="container">
      <About />
      </div>
      {/* <div>
        <Routes>
        <Route exact path="/about" element={<About />} />
          
        <Route exact path="/" element={

            <TextForm showAlert={showAlert} heading="Enter your text to analyse" mode={mode} />
        }/>
        </Routes> */}
        <div>
          <Footer head="deep" />
        </div>
        {/* </div>
      </Router> */}
</div>
    </>
  );

}
export default App;
