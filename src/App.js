import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList';
import { v4 as uuid } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.tasks'

function App() {
    const [todos, setTasks] = useState([  ]);
    const taskName = useRef();

    //for storing the tasks
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTasks) setTasks(storedTasks)
    }, [])

    function toggleTask(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTasks(newTodos)
    }

    //for getting the tasks
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function handleAdd () {
        const name = taskName.current.value
        if(name === '') return

        setTasks( prevTodos => {
            return [...prevTodos, {id: uuid(), name: name, complete: false} ]
        } )

        taskName.current.value = null
    }

    function handleClear() {
        const newTasks = todos.filter(todo => !todo.complete)
        setTasks(newTasks)
    }

    return (
        <>

        <TodoList list={todos} toggleTask={toggleTask} />
        <input ref={taskName} type = "text" ></input>
        <br></br>
        <button onClick={handleAdd} >Add Todo</button>
        <button onClick={handleClear}>Clear Completed</button>
        <div>{todos.filter(todo => !todo.complete).length} left to do</div>
        
        </>
    );
}

export default App;