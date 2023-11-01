import './root.css';
import Scales3LineIcon from 'remixicon-react/Scales3LineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

import { useState } from "react";
import Menu from './components/Navigate/Menu/Menu';

function App() {

  const [isShow, setIsShow] = useState(false);

  const showMenu = event => {
    setIsShow(isShow => !isShow);
  }

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
        <Menu isShow={isShow}/>
      </nav>
    </header>
  );
}

export default App;
