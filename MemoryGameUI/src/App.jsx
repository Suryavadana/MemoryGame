import React from 'react'
import './App.css'
import Gameboard from './components/gameboard'
function App() {

  return (
    <>
      <div style={{textAlign:'center'}}>
        <h1>Memory Game</h1>
        <Gameboard/>        
      </div>
    </>
  )
}

export default App;
