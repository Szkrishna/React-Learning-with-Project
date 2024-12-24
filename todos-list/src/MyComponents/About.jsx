import React from 'react';

export const About = () => {
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
        minWidth: "80vw",
        maxWidth: "80vw",
        minHeight: "65vh",
        maxHeight: "65vh",
        overflowY: "auto"
    }

    let cardHeaderStyle = {
        position: "sticky",
        top: "0",
        zIndex: "100",
        backgroundColor: "#fafafa"
    }
    return (
        <div className="container text-center" style={myStyle}>
            <div className="card" style={cardStyle}>
                <h3 className="card-header text-center" style={cardHeaderStyle}>About This App</h3>
                <div className='card-body text-start p-5 bg-light-subtle'>
                    <p>
                        Welcome to the Todo App! This application is designed to help you organize your tasks and boost your productivity.
                        Whether you need to manage your daily errands or plan a complex project, this app provides the tools you need to stay on top of your tasks.
                    </p>
                    <h2>Features</h2>
                    <ul>
                        <li>Add new tasks with ease</li>
                        <li>View your complete list of todos</li>
                        <li>Delete tasks you no longer need</li>
                        <li>Store your todos locally in the browser</li>
                    </ul>
                    <p>
                        This project was created as part of a learning exercise to explore React and modern web development practices. Feel free to
                        use it, learn from it, and customize it to fit your needs.
                    </p>
                    <p>
                        Built with ❤️ using React, JavaScript, and CSS.
                    </p>
                </div>
            </div>
        </div>
    );
};
