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

    const buttonStyle = {
        backgroundColor: "#007BFF",
        color: "#FFF",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
    }

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feedback, or concerns, feel free to reach out to us!</p>
            <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        style={{ width: "100%", padding: "8px" }}
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </div>
    );
};
