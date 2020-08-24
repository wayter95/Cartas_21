import React from 'react';

import './styles.css';

const Header: React.FC = () => {
  return(
      <header id="component-header">
          <h1>Cartas 21</h1>

          <div className="buttons">
            <button type="button"> Play</button>
            <button type="button"> Restart</button>
            <button type="button"> Info</button>
          </div>
      </header>
  )
}

export default Header;