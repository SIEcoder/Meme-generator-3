import React from 'react'
import Header from "./Header.jsx"
import Hero from "./Hero.jsx"
import Section from "./About.jsx"

function App() {
  const [memeArray, setMemeArray] = React.useState([])

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemeArray(data.data.memes))
  }, [])

  const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1ihzfe.jpg")

  let randomNumber;
  function handleClick(){
     randomNumber = Math.floor(Math.random() * memeArray.length)
     setMemeImage(memeArray[randomNumber].url)
  } 
  const [inputData, setInputData] = React.useState({
    topText: "my mind:",
    bottomText: "things I don't have"
  })
  
 function handleChange(event){
  const {name, value} = event.target
  setInputData(prevState => {
    return{
      ...prevState,
      [name]: value
    }
  }
  )
 }
 const [shownInfo, setShownInfo] = React.useState(false)
 function toggleShowInfo(){
  setShownInfo(prevState => !prevState)
 }
  return (
    <div>
      <Header />
      <Hero 
        memeImage={memeImage}
        handleClick={handleClick}
        handleChange={handleChange}
        inputData={inputData}
      />
      <Section 
          toggle={toggleShowInfo}
          shownInfo={shownInfo}
      />
    </div>
  )
}

export default App
