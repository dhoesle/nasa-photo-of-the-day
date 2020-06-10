import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Photo from './components/Main/Photo'
import PhotoInfo from './components/Main/PhotoInfo'






function App() {


  const [picData, setPicData] = useState([])


  useEffect(() => {
   
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WqUhgBeQCzqWZ9dHR9fmTN7OnyyJkMZ5OwXJyv2t`)
    .then(res => {
      setPicData(res.data)
      console.log(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Header key={picData.copyright} headerData={picData}/>
      <div className='photo-container'>
        <Photo photoData={picData}/>
        <PhotoInfo photoInfo={picData}/>
      </div>
      <div></div>
      
      <Footer />





    </div>
  );
}
export default App;
