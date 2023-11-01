const UlList = (props) => {
    return (
        <ul className={props.className}>
            {props.children}
        </ul>
    );
}

export default UlList;