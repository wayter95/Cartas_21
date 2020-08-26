import React, { useState } from 'react';

import Header from '../../components/Header';

//#region  Imagens Cartas
import asEspada from '../../assets/images/Cartas/Espada/1.jpg';
import doisEspada from '../../assets/images/Cartas/Espada/2.jpg';
import tresEspada from '../../assets/images/Cartas/Espada/3.jpg';
import quatroEspada from '../../assets/images/Cartas/Espada/4.jpg';
import cincoEspada from '../../assets/images/Cartas/Espada/5.jpg';
import seisEspada from '../../assets/images/Cartas/Espada/6.jpg';
import seteEspada from '../../assets/images/Cartas/Espada/7.jpg';
import oitoEspada from '../../assets/images/Cartas/Espada/8.jpg';
import noveEspada from '../../assets/images/Cartas/Espada/9.jpg';
import dezEspada from '../../assets/images/Cartas/Espada/10.jpg';
import valeteEspada from '../../assets/images/Cartas/Espada/11.jpg';
import damaEspada from '../../assets/images/Cartas/Espada/12.jpg';
import reiEspada from '../../assets/images/Cartas/Espada/13.jpg';
import asCopas from '../../assets/images/Cartas/Copas/1.jpg';
import doisCopas from '../../assets/images/Cartas/Copas/2.jpg';
import tresCopas from '../../assets/images/Cartas/Copas/3.jpg';
import quatroCopas from '../../assets/images/Cartas/Copas/4.jpg';
import cincoCopas from '../../assets/images/Cartas/Copas/5.jpg';
import seisCopas from '../../assets/images/Cartas/Copas/6.jpg';
import seteCopas from '../../assets/images/Cartas/Copas/7.jpg';
import oitoCopas from '../../assets/images/Cartas/Copas/8.jpg';
import noveCopas from '../../assets/images/Cartas/Copas/9.jpg';
import dezCopas from '../../assets/images/Cartas/Copas/10.jpg';
import valeteCopas from '../../assets/images/Cartas/Copas/11.jpg';
import damaCopas from '../../assets/images/Cartas/Copas/12.jpg';
import reiCopas from '../../assets/images/Cartas/Copas/13.jpg';
import asOuro from '../../assets/images/Cartas/Ouro/1.jpg';
import doisOuro from '../../assets/images/Cartas/Ouro/2.jpg';
import tresOuro from '../../assets/images/Cartas/Ouro/3.jpg';
import quatroOuro from '../../assets/images/Cartas/Ouro/4.jpg';
import cincoOuro from '../../assets/images/Cartas/Ouro/5.jpg';
import seisOuro from '../../assets/images/Cartas/Ouro/6.jpg';
import seteOuro from '../../assets/images/Cartas/Ouro/7.jpg';
import oitoOuro from '../../assets/images/Cartas/Ouro/8.jpg';
import noveOuro from '../../assets/images/Cartas/Ouro/9.jpg';
import dezOuro from '../../assets/images/Cartas/Ouro/10.jpg';
import valeteOuro from '../../assets/images/Cartas/Ouro/11.jpg';
import damaOuro from '../../assets/images/Cartas/Ouro/12.jpg';
import reiOuro from '../../assets/images/Cartas/Ouro/13.jpg';
import asPaus from '../../assets/images/Cartas/Paus/1.jpg';
import doisPaus from '../../assets/images/Cartas/Paus/2.jpg';
import tresPaus from '../../assets/images/Cartas/Paus/3.jpg';
import quatroPaus from '../../assets/images/Cartas/Paus/4.jpg';
import cincoPaus from '../../assets/images/Cartas/Paus/5.jpg';
import seisPaus from '../../assets/images/Cartas/Paus/6.jpg';
import setePaus from '../../assets/images/Cartas/Paus/7.jpg';
import oitoPaus from '../../assets/images/Cartas/Paus/8.jpg';
import novePaus from '../../assets/images/Cartas/Paus/9.jpg';
import dezPaus from '../../assets/images/Cartas/Paus/10.jpg';
import valetePaus from '../../assets/images/Cartas/Paus/11.jpg';
import damaPaus from '../../assets/images/Cartas/Paus/12.jpg';
import reiPaus from '../../assets/images/Cartas/Paus/13.jpg';
//#endregion
import './styles.css';
const Home = () => {
    const [deck, setDeck] = useState([
        {id:1, card: asEspada, value:1},
        {id:2, card: doisEspada, value:2},
        {id:3, card: tresEspada, value:3},
        {id:4, card: quatroEspada, value:4},
        {id:5, card: cincoEspada, value:5},
        {id:6, card: seisEspada, value:6},
        {id:7, card: seteEspada, value:7},
        {id:8, card: oitoEspada, value:8},
        {id:9, card: noveEspada, value:9},
        {id:10, card: dezEspada, value:10},
        {id:11, card: valeteEspada, value:11},
        {id:12, card: damaEspada, value:12},
        {id:13, card: reiEspada, value:13},
        {id:14, card: asCopas, value:1},
        {id:15, card: doisCopas, value:2},
        {id:16, card: tresCopas, value:3},
        {id:17, card: quatroCopas, value:4},
        {id:18, card: cincoCopas, value:5},
        {id:19, card: seisCopas, value:6},
        {id:20, card: seteCopas, value:7},
        {id:21, card: oitoCopas, value:8},
        {id:22, card: noveCopas, value:9},
        {id:23, card: dezCopas, value:10},
        {id:25, card: valeteCopas, value:11},
        {id:25, card: damaCopas, value:12},
        {id:26, card: reiCopas, value:13},
        {id:27, card: asOuro, value:1},
        {id:28, card: doisOuro, value:2},
        {id:29, card: tresOuro, value:3},
        {id:30, card: quatroOuro, value:4},
        {id:31, card: cincoOuro, value:5},
        {id:32, card: seisOuro, value:6},
        {id:33, card: seteOuro, value:7},
        {id:34, card: oitoOuro, value:8},
        {id:35, card: noveOuro, value:9},
        {id:36, card: dezOuro, value:10},
        {id:37, card: valeteOuro, value:11},
        {id:38, card: damaOuro, value:12},
        {id:39, card: reiOuro, value:13},
        {id:40, card: asPaus, value:1},
        {id:41, card: doisPaus, value:2},
        {id:42, card: tresPaus, value:3},
        {id:43, card: quatroPaus, value:4},
        {id:44, card: cincoPaus, value:5},
        {id:45, card: seisPaus, value:6},
        {id:46, card: setePaus, value:7},
        {id:47, card: oitoPaus, value:8},
        {id:48, card: novePaus, value:9},
        {id:49, card: dezPaus, value:10},
        {id:50, card: valetePaus, value:11},
        {id:51, card: damaPaus, value:12},
        {id:52, card: reiPaus, value:13},
    ])
    const [card, setCard] = useState('');
    function pullCard(){
        const count = deck.length - 1;

        setCard(deck[count].card);

        if(count > 0){
            deck.splice(count,1)
        }

    }
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
                        <div className="deck-content">
                            <img src={card} alt={card}/>
                        </div>
                        <button type="button" onClick={pullCard}>Virar uma carta</button>
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