import './App.css';
import Scales3LineIcon from 'remixicon-react/Scales3LineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';
import User2FillIcon from 'remixicon-react/User2FillIcon';
import AuctionFillIcon from 'remixicon-react/AuctionFillIcon';

import { useState } from "react";

function App() {

  const [isShow, setIsShow] = useState(false);

  const showMenu = event => {
    setIsShow(isShow => !isShow);
  }

  const navClasses = isShow ? 'nav__menu show-menu' : 'nav__menu';
  const toogleClasses = isShow ? 'nav__toggle show-icon' : 'nav__toggle';

  return (
    <header className='header'>
      <nav className='nav container'>
        <div className='nav__data'>
          <a href="#" className="nav__logo">
            <Scales3LineIcon className="icon__logo"/> Rafał Kowalski
          </a>
          <div className={toogleClasses} id="nav-toggle">
            <MenuLineIcon className="nav__burger" onClick={showMenu}/>
            <CloseLineIcon className="nav__close" onClick={showMenu}/>
          </div>
        </div>
        <div className={navClasses} id="nav-menu">
          <ul className="nav__list">
            <li><a href="#" className="nav__link">Strona domowa</a></li>

            <li><a href="#" className="nav__link">Aktualności</a></li>

            <li className="dropdown__item">
              <div className="nav__link">
                Zakres praktyk<ArrowDownSLineIcon className='dropdown__arrow'/> 
              </div>

              <ul className="dropdown__menu">
                <li>
                  <a href="#" className="dropdown__link">
                    <User2FillIcon className="dropdown__icon"/> Prawo cywilne
                  </a>
                </li>
                <li>
                  <a href="#" className="dropdown__link">
                    <AuctionFillIcon className="dropdown__icon"/> Prawo karne
                  </a>
                </li>
              </ul>
            </li>

            <li><a href="#" className="nav__link">Firmy</a></li>

            <li><a href="#" className="nav__link">Kontakt</a></li>

            <li><a href="#" className="nav__link">O nas</a></li>

          </ul>
        </div>
      </nav>
    </header>
  );
}

export default App;
