import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "82vh",
        maxHeight: "82vh",
        overflowY: "auto",
        marginTop: "3px",
    }
    return (
        <div className="" style={myStyle}>
            <h3 className="my-3 text-center">Todos List</h3>
            {props.todos.length === 0 ? "No Todos to display" :
                props.todos.map((todo) => {
                    return (<>
                        <TodoItem todo={todo} key={todo.sno}/>
                    </>)
                })
            }
        </div>
    )
}