import React from 'react';

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div className='ms-5 ps-5'>
                <h4>{todo.title}</h4>
                <p>{todo.desc}</p>
            </div>
            <hr />
        </>
    )
}
