const Toggle = () => {
    return (
        <div className={toogleClasses} id="nav-toggle">
            <MenuLineIcon className="nav__burger" onClick={showMenu}/>
            <CloseLineIcon className="nav__close" onClick={showMenu}/>
        </div>
    );
}

export default Toggle;