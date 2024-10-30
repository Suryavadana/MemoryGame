import React from 'react';
import NavBar from './components/NavBar';
import GameBoard from './components/GameBoard';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<GameBoard />} />
            </Routes>
        </Router>
    );
};

export default App;