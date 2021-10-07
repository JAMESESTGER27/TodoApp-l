import React, { useState } from 'react'
const initialFormValues = {
  title: '',
  description: ''
}
export const TodoForm = ({todoAdd}) => {

  const [formValues, setFormValues] = useState(initialFormValues)
  const { title, description} = formValues;
  const handleInputChange = (e) => {

    const changedFormValues = {
        ...formValues,
        [e.target.name]: e.target.value
    }

    setFormValues(changedFormValues);
}

  const handleSubmit = (e) =>{
    e.preventDefault();
    todoAdd(formValues);
  }

  return (
    <div>
      <h1>Nueva tarea</h1>
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="titulo" 
        className="form-control" 
        value={title}
        name="title"
        onChange={handleInputChange}
        />
        <textarea 
        placeholder="Description" 
        className="form-control mt-2"
        value={description}
        name="description"
        onChange={handleInputChange}
        ></textarea>
        <button 
        className="btn btn-primary btn-block mt-2"
        >
          Agregar tarea
        </button>
      </form>
    </div>
  )
}
