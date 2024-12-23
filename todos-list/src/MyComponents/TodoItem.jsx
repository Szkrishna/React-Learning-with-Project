import React from 'react';

export const TodoItem = ({ todo }) => {
    return (
        <>
            <div className='card-body ms-5 ps-5 border-bottom'>
                <h4>{todo.sno+1}. {todo.title}</h4>
                <p>{todo.desc}</p>
            </div>
        </>
    )
}
