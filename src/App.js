import React from "react";
import './App.scss'
import NavBar from './components/NavBar'
import Main from './components/Main'

const App = () => {
  return (
    <div className="outerWrap">
      <div className="App">
        <NavBar />
        <Main />
      </div>
        <div className="musicControls">Music Controls</div>
    </div>
  )
}

export default App 