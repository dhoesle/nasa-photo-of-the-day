import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Header from './components/Header'
import Photo from './components/Main/Photo'
import PhotoInfo from './components/Main/PhotoInfo'
import Container from './components/Container'






function App() {


  const [picData, setPicData] = useState([])


  useEffect(() => {
   
    
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=WqUhgBeQCzqWZ9dHR9fmTN7OnyyJkMZ5OwXJyv2t`)
    .then(res => {
      setPicData(res.data)
      console.log(res)
    })
    .catch(err => {
      debugger
    })
  }, [])
  const makeStyles = () => {
    return {
      body: {
        backgroundColor: '#404143'
      }
    }
  }

  return (
    <div style={makeStyles().body} className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      
      <Header key={picData.copyright} headerData={picData}/>
      <Container className='photo-container'>
        <Photo photoData={picData}/>
        <Container>
          <PhotoInfo photoInfo={picData}/>
        </Container>
      </Container>
      <div></div>
      





    </div>
  );
}
export default App;
