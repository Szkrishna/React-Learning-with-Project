import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

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
        minWidth: "50vw",
        minHeight: "40vh",
        marginBottom: "150px" 
    }
    return (
        <div className="container text-center" style={myStyle}>
            <div className="card" style={cardStyle}>
                <h3 className="card-header text-center">Add a Todo</h3>
                <div className="card-body p-4">
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Todo Description</label>
                            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                        </div>
                        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
