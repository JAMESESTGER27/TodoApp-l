import React, { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

const todos = [
  {
  id:1,
  title: "Todo 1",
  description: "Esta tarea es de barrer la casa",
  completed: false
  },
  {
    id:2,
    title: "Todo 2",
    description: "Ver videos de programacion",
    completed: true
  },
  {
    id:3,
    title: "Todo 3",
    description: "Escuchar Paganini",
    completed: true
  }
]

const localTodos = JSON.parse(localStorage.getItem("todos"));

export const App = () =>{

  const [todo,setTodo] = useState(localTodos || todos)
  const [todoEdit,setTodoEdit]  = useState(null)

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todo));
  },[todo])

  const todoDelete = (todoId) =>{
    if(todoEdit && todoId === todoEdit.id){
      setTodoEdit(null)
    }
    const changeTodo = todo.filter(todo => todo.id !== todoId)
    setTodo(changeTodo)
  }
  const todoComplete = (todoId) =>{

    // De forma un poco tediosa de ver FORMA 1
    // const changeTodo = todo.map(todo => {

    //   const todoEdit = {
    //     ...todo,
    //     completed : !todo.completed
    //   }
    //   if(todo.id === todoId){
    //     return todoEdit
    //   }else{
    //     return todo
    //   }
    // })
    // Segunda forma
    // const changeTodo = todo.map(todo =>(
    //   todo.id === todoId
    //   ? {...todo,completed : !todo.completed}
    //   : todo
    // ))
    // Tercera forma muchas mas compacta
    const changeTodo = todo.map(
      todo => todo.id === todoId 
      ? {...todo,completed : !todo.completed}
      : todo )
    setTodo(changeTodo)

  }

  const todoAdd = (todo) =>{
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }
    const changeTodo = [
      newTodo,
      ...todos
    ]
    setTodo(changeTodo)
  }

  const todoUpdate = (todoEdit) =>{
    const changeTodo = todos.map(todo =>(
      todo.id === todoEdit.id
      ? todoEdit
      : todo
    ))
    setTodo(changeTodo)
  }

  return(
    <div className="container mt-5">
        <div className="row">
          <div className="col-8">
              <TodoList 
              todo={todo}
              todoDelete={todoDelete}
              todoComplete={todoComplete}
              setTodoEdit={setTodoEdit}
              />
          </div>
          <div className="col-4">
              <TodoForm
              todoAdd={todoAdd}
              todoEdit={todoEdit}
              todoUpdate={todoUpdate}
              setTodoEdit={setTodoEdit}
              />
          </div>
        </div>
    </div>
  )
}
