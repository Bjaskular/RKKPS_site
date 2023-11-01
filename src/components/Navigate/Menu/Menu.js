import '../../../root.css';
import './Menu.css';
import ArrowDownSLineIcon from "remixicon-react/ArrowDownSLineIcon";
import ItemLinkList from "../../UI/ItemLinkList";
import ItemList from "../../UI/ItemList";
import UlList from "../../UI/UlList";
import DropdownItem from "../Dropdown/DropdownItem";
import User2FillIcon from "remixicon-react/User2FillIcon";
import AuctionFillIcon from "remixicon-react/AuctionFillIcon";

const Menu = (props) => {

    const showStyle = props.isShow ? 'show-menu': '';

    return (
        <div className='nav__menu' id={showStyle}>
            <UlList className="nav__list">
                <ItemLinkList link='#' className='nav__link'>Strona domowa</ItemLinkList>
                <ItemLinkList link='#' className='nav__link'>Aktualności</ItemLinkList>

                <ItemList className="dropdown__item">
                    <DropdownItem>
                        Zakres praktyk<ArrowDownSLineIcon className='dropdown__arrow'/> 
                    </DropdownItem>
                    <UlList className="dropdown__menu">
                        <ItemLinkList link='#' className='dropdown__link'> 
                            <User2FillIcon className="dropdown__icon"/> Prawo cywilne
                        </ItemLinkList>
                        <ItemLinkList link='#' className='dropdown__link'> 
                            <AuctionFillIcon className="dropdown__icon"/> Prawo karne
                        </ItemLinkList>
                    </UlList>
                </ItemList>
                
                <ItemLinkList link='#' className='nav__link'>Firmy</ItemLinkList>
                <ItemLinkList link='#' className='nav__link'>Kontakt</ItemLinkList>
                <ItemLinkList link='#' className='nav__link'>O nas</ItemLinkList>
            </UlList>
        </div>
    );
}

export default Menu;