import React, { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name}. We have received your message!`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div style={{ padding: "51px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ maxWidth: "550px", margin: "auto" }}>
                <h1 className="text-center">Contact Us</h1>
                <p className="mb-4">If you have any questions, feedback, or concerns, feel free to reach out to us!</p>
            </div>
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                        className="form-control" required/>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                        className="form-control" required/>
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                        rows="5" className="form-control" required/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>   
                </div>
            </form>
        </div>
    );
};
