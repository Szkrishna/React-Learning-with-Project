import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "80vh",
        maxHeight: "80vh",
        overflowY: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2px"
    }

    let cardStyle = {
        minWidth: "75vw",
        maxWidth: "75vw",
        minHeight: "65vh",
        maxHeight: "65vh",
        marginBottom: "30px",
        overflowY: "auto"
    }

    let cardHeaderStyle = {
        position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "#fff"
    }
    return (
        <div className="container text-center" style={myStyle}>
            <div className="card" style={cardStyle}>
                <h3 className="card-header text-center" style={cardHeaderStyle}>Todos List</h3>
                {props.todos.length === 0 ? "No Todos to display" :
                    props.todos.map((todo) => {
                        return (<>
                            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                        </>)
                    })
                }
            </div>
        </div>
    )
}