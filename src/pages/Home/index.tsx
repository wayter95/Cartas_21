import React, { useState, useEffect } from 'react';

import fullDeck from '../../assets/images/Cartas/fullDeck.png';
import almostFull from '../../assets/images/Cartas/almostDeck.png';
import halfDeck from '../../assets/images/Cartas/halfDeck.png';
import emptyDeck from '../../assets/images/Cartas/emptyDeck.png';

import Header from '../../components/Header';

import './styles.css';

import loadList from '../../utils/deckFiles';
const data = loadList();
const Home = () => {
    const [deck, setDeck] = useState(data);
   
    const [card, setCard] = useState('');
    const [bgCard, setBgCard] = useState(fullDeck);

    function shuffle(){
        var m = deck.length, t, i;

        while(m) {
            i = Math.floor(Math.random() * m--);

            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }

        setDeck(deck)
    }
    function pullCard() {
        const count = deck.length - 1;

        setCard(deck[count].card);
        alterDeck()
        if (count > 0) {
            deck.splice(count, 1)
        }

    }
    function alterDeck() {
        const count = deck.length;

        if (count > 40) {
            setBgCard(fullDeck);
        }
        else if (count > 30) {
            setBgCard(almostFull);
        }
        else if (count > 15) {
            setBgCard(halfDeck);
        }
        else if (count > 2) {
            setBgCard(emptyDeck);
        }
        else {
            setBgCard('Vazio')
        }
    }
  
    return (
        <div id="page-home">
            <Header />
            <div className="content">
                <div className="deck">
                    <div className="init">
                        <button onClick={shuffle}>Embaralhar</button>
                        <div className="deck-content">
                            <img src={bgCard} alt={bgCard} />
                        </div>
                    </div>
                    <div className="show-cards">
                        <div className="deck-content">
                            <img src={card} alt={card} />
                        </div>
                        <button type="button" onClick={pullCard}>Virar uma carta</button>
                    </div>
                </div>
                <div className="players">
                    <div className="player">
                        <h1>Player 1</h1>
                        <div className="deck-content">

                        </div>
                    </div>
                    <div className="player">
                        <h1>Player 2</h1>
                        <div className="deck-content">

                        </div>
                    </div>

                </div>
                <div className="scoreboard">
                    <h1>Placar</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;