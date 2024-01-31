import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
import { v4 as uuid } from "uuid";

function TodoList(){
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        const newTodo = {...todo, id: uuid(), completed: false};
        setTodos(todos => [...todos, newTodo])
    }

    const removeTodo = id => {
        const todosCopy = [...todos];
        setTodos(todos => todosCopy.filter(todo => todo.id !== id))
    }
    
    const [editTodoForm, setEditTodoForm] = useState();

    const showEditForm = (id, task) => {
        setEditTodoForm(<EditTodoForm id={id} task={task} editTodo={editTodo} />)
    }

    const editTodo = (id, task) => {
        const todosCopy = [...todos];
        todosCopy.map(todo => {
            if(todo.id === id){
                todo.task = task.task;

            }
            return todo;
        })
        setEditTodoForm();
        setTodos(todosCopy);
    }

    const completeTodo = (id) => {
        const todosCopy = [...todos];
        todosCopy.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;

            }
            console.log(todo)
            return todo;
        })
        setTodos(todosCopy);
    };

    return (
        <div className="TodosList">
            <NewTodoForm addTodo={addTodo} />
            {editTodoForm}
            {todos.map((todo) => (<Todo 
                                   key={todo.id} 
                                   task={todo.task} 
                                   completed = {todo.completed}
                                   complete = {()=> completeTodo(todo.id)}
                                   remove={() => removeTodo(todo.id)} 
                                   edit={() => showEditForm(todo.id, todo.task)}
                                   testId={todo.id}/>))}
        </div>
    )
}

export default TodoList;