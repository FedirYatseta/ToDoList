import React from 'react'

export const ToDoList = ({ todos, setTodos, setEditTodo }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todos) => todos.id !== id))
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id)
        setEditTodo(findTodo)
    }
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }
    return (
        <div className="list-item-todo">
            {todos.map((todo) => (
                <li className="todo-list" key={todo.id}>
                    <input type="text" value={todo.title} className="list-item" onChange={(e) => e.preventDefault()}> 
                    
                     </input>
                     <div>
                        <button className="button-complete task-button " onClick={() => handleComplete(todo)} >
                            <i className="fa fa-check-circle "></i>
                        </button>
                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit "></i>
                        </button>
                        <button className="button-delete task-button" onClick={() => handleDelete(todo)} >
                            <i className="fa fa-trash "></i>
                        </button>
                    </div>
                    

                </li>
            ))}
        </div>
    )
}
