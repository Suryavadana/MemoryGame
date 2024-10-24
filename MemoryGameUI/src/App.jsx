import React from 'react'
import './App.css'
import NavBar from './components/NavBar';
import GameBoard from './components/gameboard';



function App() {

  return (
    <>
     <div style={{ backgroundColor: 'rgb(228, 245, 131)' ,width: '210vh', minHeight:'100vh'}}>
      <NavBar/>
      <div style={{ marginTop: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 80px)' }}>
      <GameBoard />
      </div>
      </div>
    </>
  )
}

export default App;
