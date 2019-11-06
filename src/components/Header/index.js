import React from 'react';

import './Header.css'

import logo from '../../assets/logo.png';
import account from '../../assets/account.png';

const Header = () => (
  <div className="header-container">
    <img width={50} height={50} src={logo} />
    <div className="header-actions">
      <p className="header-text">{'Meu Perfil'}</p>
      <img width={30} height={30} src={account} />
    </div>
  </div>
)

export default Header;  