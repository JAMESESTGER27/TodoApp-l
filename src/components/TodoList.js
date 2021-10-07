import React from 'react'
import { Todo } from './Todo'




export const TodoList = ({todo,todoDelete,todoComplete}) => {

  return (
    <div>
      <h1 className="text-end">Todo List</h1>

    {
      todo.map(todo =>(
        <Todo
        key={todo.id}
        todo={todo}
        todoDelete={todoDelete}
        todoComplete={todoComplete}
        />
      ))
    }

    </div>
  )
}
