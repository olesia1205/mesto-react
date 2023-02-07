import React from 'react';

function Header() {
  return(
    <header  className="header">
      <img  className="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип-Место Россия"/>
    </header>
  );
}

export default Header;