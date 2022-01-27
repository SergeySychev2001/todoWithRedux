import './ListItem.css';
import { CheckOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { deleteItem, setDone } from '../redux/actions/index'

const ListItem = ({ item }) => {

    const dispatch = useDispatch()

    const { id, text, done } = item;
    return (
        <div className="list-item">
            <span className={`list-item__text ${done ? 'list-item__text_done' : ''}`}>{text}</span>
            <div className="list-item__btns">
                {done
                    ? <CloseOutlined className="btns__btn" onClick={() => dispatch(setDone(id, false))}/>
                    : <CheckOutlined className="btns__btn" onClick={() => dispatch(setDone(id, true))}/>}
                <DeleteOutlined className="btns__btn" onClick={() => dispatch(deleteItem(id))}/>
            </div>
        </div>
    )
}

export default ListItem;