import React from 'react'
import '../App.css'

const Todo = (props) => {

    const { setTodos, todos, todo } = props;

    const deleteTodoHandler = () => {
        setTodos( todos.filter( (element) => element.id != todo.id))
    }

    const completedTodoHandler = () => {
        setTodos( todos.map( (element) => {
            if(element.id == todo.id) {
                return {
                    ...element,
                    completed: !todo.completed
                }
            }
            return element;
        }))
    }
  return (
    <div className='todo'>
        <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
        <button onClick={completedTodoHandler} className='complete-btn'> <i className='fas fa-check' ></i> </button>
        <button onClick={deleteTodoHandler} className='trash-btn'> <i className='fas fa-trash'></i> </button>
    </div>
  )
}

export default Todo;
