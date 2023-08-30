import React from 'react';
import './help.css';
import Logo from '../help.png';

export const HelpPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={Logo} height="500px" margin="auto" alt="it is 404"/>
    </div>
  );
}