import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div>
                <h4>{todo.title}</h4>
                <p>{todo.description}</p>
            </div>
            <hr />
        </>
    )
}
