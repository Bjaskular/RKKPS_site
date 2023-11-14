import './Toggle.css';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';

const Toggle = (props) => {

    const toogleClasses = props.isShow ? 'nav__toggle show-icon' : 'nav__toggle';

    return (
        <div className={toogleClasses} id="nav-toggle">
            <MenuLineIcon className="nav__burger" onClick={props.showMenu}/>
            <CloseLineIcon className="nav__close" onClick={props.showMenu}/>
        </div>
    );
}

export default Toggle;