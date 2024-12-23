import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "82vh",
        maxHeight: "82vh",
        overflowY: "auto",
        marginTop: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    let cardStyle = {
        minWidth: "60vw",
        marginBottom: "30px" 
    }
    return (
        <div className="container text-center" style={myStyle}>
            <div className="card" style={cardStyle}>
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