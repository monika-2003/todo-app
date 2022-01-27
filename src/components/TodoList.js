import React, { Component, useState } from 'react';
import ListItems from './ListItems';

const TodoList = ()=> {

    const [inputList , setInput] = useState("");
    const [Items , setItems] = useState([]);

    const itemEvent = (event) => {
        const content = event.target.value;
        setInput(content);
    }

    const itemHandler = () => {
        setItems((iter) => {
            return [...iter , inputList];
        })
        setInput("")
    }

    const deleteHandler = (id) => {
        setItems((iter)=> {
            return iter.filter((arrEle , index) => {
                return index !== id;
            })
        })
    }

    return (
    <div className = "outer">
        <h1>Todo App</h1>
        <div className = "box">
            <input type = "text" placeholder='Add your new todo' className='inp' onChange={itemEvent} value={inputList}/>
            <button className='btn' onClick={itemHandler}>+</button>

            <div id='list'>
                {
                    Items.map( (value , index) => {
                        return <ListItems key = {index} id = {index} text = {value} onSelect = {deleteHandler}/>
                    })
                }

            </div>
        </div>
    </div>
    );

}

export default TodoList;
