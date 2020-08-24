import React from 'react';

import Header from '../../components/Header';

import './styles.css';
const Home = () => {
    return (
        <div id="page-home">
            <Header />
            <div className="content">
                <div className="deck">
                    <div className="init">
                        <button>Embaralhar</button>
                        <div className="deck-content">Teste</div>
                    </div>
                    <div className="show-cards">
                        <div className="deck-content">Teste</div>
                        <button>Virar uma carta</button>
                    </div>
                </div>
                <div className="players">
                    <h1>Player 1</h1>
                    <h1>Player 2</h1>
                    <h1>Player 3</h1>
                    <h1>Player 4</h1>
                </div>
                <div className="scoreboard">
                    <h1>Placar</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;