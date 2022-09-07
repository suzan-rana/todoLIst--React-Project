import React from 'react'
import "../App.css"

const Form = (props) => {

    const { todos, setTodos, inputText, setInputText } = props;


    const onInputChangeHandler = (event) => {
        setInputText(event.target.value);


    }

    const onClickHandler = (event) => {
        event.preventDefault();
        setTodos([...todos,
        {
            completed: false,
            text: inputText,
            id: Math.random() * 1000
        }])
        setInputText('')
    }
    const nothing = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <form>
                <input onChange={onInputChangeHandler} value={inputText} type="text" className="todo-input" />
                <button onClick={inputText != '' ? onClickHandler : nothing} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </div>
    )
}

export default Form;    