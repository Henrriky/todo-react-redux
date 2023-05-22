import React, { useState } from 'react';
import { addItem } from '../actions/listActions';
import { useDispatch } from 'react-redux';

function TodoForm(props) {

    const [text, setText] = useState(""); 
    const dispatch = useDispatch()

    function handleChange(event) {
        let valueInput = event.target.value;
        setText(valueInput);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            dispatch(addItem(text));
            setText("");
            props.onHideModal();
            return;
        }
        alert("Campo vazio!")
    }

    return (
        <form>
            <input onChange={handleChange} type="text" value={text}/>
            <button onClick={addItemEvent}>Add</button>
        </form>
    )
}

export default TodoForm;
