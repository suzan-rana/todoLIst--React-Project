import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import './App.css'



const App = () => {
 
  const getLocalData = () => {
    let data = JSON.parse(localStorage.getItem('todos'))  || []
    return data;
  }

  // states 
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState(getLocalData);


  useEffect( () => {
    if(todos) {
      localStorage.setItem('todos', JSON.stringify(todos))  
    }
    
  }, [todos])


  return (
    <div className='App'>
      <header>TodoList</header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} />
      <TodoList todos= {todos} setTodos={setTodos} />
    </div>
  )
}

export default App;
