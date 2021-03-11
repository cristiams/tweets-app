import React from 'react';
import Logo from "../../assets/img/twitter-logo.png";
import './header.scss';

export default function Header() {

  return (
    <div className="header">
      <img src={Logo} alt="Tweets Simulator"/>
      <h1>Tweets Simulator</h1>
    </div>
  );
}
