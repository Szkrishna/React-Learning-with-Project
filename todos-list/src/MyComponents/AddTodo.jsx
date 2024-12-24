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
        minHeight: "80vh",
        maxHeight: "80vh",
        overflowY: "auto",
        marginTop: "2px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    let cardStyle = {
        minWidth: "50vw",
        minHeight: "40vh",
        marginBottom: "50px" 
    }
    return (
        <div className="container text-center" style={myStyle}>
            <div className="card" style={cardStyle}>
                <h3 className="card-header text-center">Add Todo</h3>
                <div className="card-body p-4">
                    <form onSubmit={submit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="title" className="form-label">Todo Title</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-4 text-start">
                            <label htmlFor="desc" className="form-label">Todo Description</label>
                            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                        </div>
                        <button type="submit" className="btn btn-success text-center">Add Todo</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
