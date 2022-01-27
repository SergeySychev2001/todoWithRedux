import './Todo.css';
import Input from './Input';
import List from './List'
import { useSelector } from 'react-redux';

const Todo = () => {

    const { list } = useSelector(state => state.todo);
    localStorage.setItem('list', JSON.stringify(list));

    return (
        <div className="todo">
            <Input/>
            <List/>
        </div>
    )
}

export default Todo;