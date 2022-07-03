

const ListItem = ({id, text, onDelete}) => {
    return (
        <li>{text}
            <button onClick={() => onDelete(id)}>delete</button>
        </li>
    )
};

export default ListItem;