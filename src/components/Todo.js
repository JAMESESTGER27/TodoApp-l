import React from 'react'

export const Todo = ({todo,todoDelete,todoComplete,setTodoEdit}) => {

  const handleDelete = () =>{
    todoDelete(todo.id)
  }
  const handleComplete = () =>{
    todoComplete(todo.id)
  }
  const handleEdit = () =>{
    setTodoEdit(todo)
  }
  const {title,description} = todo
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-end gap-2 flex-wrap ">
          <h3 className="card-title text-end">
            {title}
          </h3>
          <button
          onClick={handleComplete} 
          className={`btn btn-sm ${todo.completed ? "btn-success": "btn-outline-success"}`}
          >
            {todo.completed ? "Terminado" : "Pendiente"}
          </button>
          </div>
          <p className="card-text text-end">
            {description}
          </p>
          <hr/>
          <div className="d-flex justify-content-end">
          <button 
          onClick={handleEdit}
          className="btn btn-sm btn-outline-primary me-2"
          >
          Editar</button>
          <button onClick={handleDelete} className="btn btn-sm btn-outline-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </>
  )
}
