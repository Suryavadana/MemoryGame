import React from 'react';
import NavBar from './components/NavBar';
import GameBoard from './components/gameboard';
import './App.css';

const App = () => {
    return (
        <div>
            <NavBar />
            <GameBoard/>
        </div>
    );
};

export default App;
