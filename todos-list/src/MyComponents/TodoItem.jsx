import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
    let todoBoxStyle = {
        border: "1px solid rgba(0, 0, 0, 0.17)",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 0, 0, 0.05)",
        padding: "20px 40px"
    }

    return (
        <>
            <div className='card-body text-start p-3'>
                <div style={todoBoxStyle}>
                    <h4>{todo.sno + 1}. {todo.title}</h4>
                    <p className='mb-1'>{todo.desc}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
                </div>
            </div>
        </>
    )
}
