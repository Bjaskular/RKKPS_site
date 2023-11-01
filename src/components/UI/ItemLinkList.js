const ItemLink = (props) => {
    return (
        <li>
            <a href={props.link} className={props.className}>
                {props.children}
            </a>
        </li>
    ); 
}

export default ItemLink;