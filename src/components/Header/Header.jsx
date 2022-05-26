import React from 'react';

import kv from '../../img/kv.png';
import kvBackground from '../../img/kv_background.png';

import './Header.module.scss';

const Header = () => {

  return (
    <header className={'header'}>
      <div className={'header__img-wrapper'}>
        <img src={kvBackground} className={'header__kv-background'} alt="kv background" />
        <img src={kv} className={'header__kv'} alt="kv background" />
      </div>
      <h1 className={'header__title'}>
        Designer&nbsp;×<br />
        developer
        <hr className={'header__hr'} />
        <span className={'header__subtitle'}>Mateusz&nbsp;Jakubczyk</span>
      </h1>

    </header>
  );
}

export default Header;