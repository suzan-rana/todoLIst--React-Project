import React from 'react'
import Todo from './Todo'
import '../App.css'

const TodoList = (props) => {
  const { todos, setTodos } = props;
  return (
    <div className='todo-container'>
      <ul className="todo-list">
        { todos.map( (todo) => {
          return (<Todo key={todo.id} todos={todos} setTodos={setTodos} text={todo.text} todo={todo} />)
        })}
       
      </ul>
    </div>
  )
}

export default TodoList;