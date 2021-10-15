import React from 'react'

const TodosList = ({todos,setTodos,setEditTodo}) => {

    const handleComplete = (todo) =>{
        setTodos(todos.map((item) =>{
            if(item.id === todo.id) {
                return {...item,completed: !item.completed}
            }
            return item;
        })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };
    const handleUp = ({ id }) => {
        // const findTodo = todos.find((todo) => console.log(todo));

    };
    const handleDown = ({ id }) => {
        // const findTodo = todos.find((todo) => );
        // const at=0;
        // const todo = todos.map((todo,idx) => console);
        // console.log(at);
    };

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => 
        todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo,idx) => (
                <li className = "list-item" key1 = {idx} key = {todo.id}>
                
                    <input
                    type = "text"
                    value = {todo.title}
                    className = {`list ${todo.completed ? "complete" : ""}`}
                    onChange = {(event) => event.preventDefault()}
                    />
                    
                    <div>
                    
                    <button className = "button-complete task-button" onClick = {() => handleUp(todo)}>
                    <i className="fas fa-sort-up"></i>
                        </button>
                        <button className = "button-complete task-button" onClick = {() => handleDown(todo)}>
                    <i className="fas fa-sort-down"></i>
                        </button>
                        <button className = "button-complete task-button" onClick = {() => handleComplete(todo)}>
                            <i className = "fas fa-check-circle"></i>
                        </button>
                        <button className = "button-edit task-button" onClick = {() => handleEdit(todo)}>
                            <i className = "fa fa-edit"></i>
                        </button>
                        <button 
                        className = "button-delete task-button"
                        onClick = {() => handleDelete(todo)}
                        >
                            <i className = "fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    )
}

export default TodosList
