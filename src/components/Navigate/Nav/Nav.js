import '../../../root.css';
import './Nav.css';
import Scales3LineIcon from 'remixicon-react/Scales3LineIcon';

import { useState } from "react";
import Menu from '../Menu/Menu';
import Toggle from '../Toggle/Toggle';
import ItemLinkList from '../../UI/ItemLinkList';

const Nav = () => {

    const [isShow, setIsShow] = useState(false);

    const showMenu = event => {
      setIsShow(isShow => !isShow);
    }

    return (
        <nav className='nav container'>
            <div className='nav__data'>
                <ItemLinkList link='#' className='nav__logo'>
                    <Scales3LineIcon className="icon__logo"/> Rafał Kowalski
                </ItemLinkList>
                <Toggle showMenu={showMenu} isShow={isShow}/>
            </div>
            <Menu isShow={isShow}/>
        </nav>
    );
}

export default Nav;