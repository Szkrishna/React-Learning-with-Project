import React from 'react'
// import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "44px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3 text-center">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return (<>
                        <div>
                            <h6 className='mb-0'>{todo.sr_no}: {todo.title}</h6>
                        </div>
                        <p>{todo.description}</p>
                    </>)
                })
            }
        </div>
    )
}