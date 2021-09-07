import React, { FunctionComponent } from 'react';
import Navigation from 'components/_shared/navigation-anchor';
import { Instagram, Facebook, Mail } from 'react-feather';
import './style.less';

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <img
        src="/logos/transparent_color-full-size.png"
        alt="Logo de fundacion metáfora"
        width={200}
        height={100}
      />
      <div className="header__navigation">
        <Navigation href="/">Orquestando Futuros</Navigation>
        <div className="divider" />
        <div className="header__social-media">
          <Instagram />
          <Facebook />
          <Mail />
        </div>
      </div>
    </header>
  );
};

export default Header;
