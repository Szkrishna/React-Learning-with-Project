import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "82vh",
        maxHeight: "82vh",
        overflowY: "auto",
        // marginTop: "3px",
        backgroundColor: "rgb(255, 255, 255)"
    }
    return (
        <div style={myStyle}>
            <div className='card'>
                <h3 className="card-header text-center">Todos List</h3>
                {props.todos.length === 0 ? "No Todos to display" :
                    props.todos.map((todo) => {
                        return (<>
                            <TodoItem todo={todo} key={todo.sno}/>
                        </>)
                    })
                }
            </div>
        </div>
    )
}