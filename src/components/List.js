import ListItem from './ListItem';
import './List.css';
import { useSelector } from 'react-redux';

const List = () => {

    const { list } = useSelector(state => state.todo);

    const renderData = list.map(item => <ListItem item={item}/>)

    return (
        <div className="list">
            {renderData}
        </div>
    )
}

export default List;