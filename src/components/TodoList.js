import React from 'react'
import { Todo } from './Todo'




export const TodoList = ({todo,todoDelete,todoComplete,setTodoEdit}) => {

  return (
    <div>
      <h1 className="text-end">Todo List</h1>
    {
        todo.length === 0
        ?(
          <div className="alert alert-primary">
            No hay tareas. Por favor agrega una :p
          </div>
        ):(
          todo.map(todo =>(
            <Todo
            key={todo.id}
            todo={todo}
            todoDelete={todoDelete}
            todoComplete={todoComplete}
            setTodoEdit={setTodoEdit}
            />
          ))
        )
      }

    </div>
  )
}
