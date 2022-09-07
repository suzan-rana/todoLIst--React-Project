import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {
  // useEffect( () => {


  //   localStorage.setItem('todos', JSON.stringify(todos));
  //   const todosLocal = JSON.parse(localStorage.getItem('todos'))
  //   setTodos( [ ...todos, todosLocal ])

    
  // }, [todos])

  // states 
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);

  
  
  return (
    <div>
      <header>TodoList by Suzan Rana</header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos= {todos} setTodos={setTodos} />
    </div>
  )
}

export default App;
