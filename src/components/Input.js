import { Input as InputAnt, Button } from 'antd';
import React, { useState } from 'react';
import './Input.css';
import { useAlert } from 'react-alert'
import { addItem } from '../redux/actions/index'
import { useDispatch } from 'react-redux';

const Input = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const alert = useAlert();

    const handleChange = (value) => {
        setInput(value)
        if (value.length > 0) setError(false);
    }

    const onAdd = () => {
        if (input) {
            dispatch(addItem(input));
            setInput('');
        } else {
            setError(true);
            alert.error('Пожалуйста, заполните поле');
        }
    }

    return (
        <div className="input">
            <InputAnt
                className={`input__input" ${error ? "input__input_error" : ''}`}
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
            <Button type="primary" onClick={() => onAdd()}>Submit</Button>
        </div>
    )
}

export default Input;