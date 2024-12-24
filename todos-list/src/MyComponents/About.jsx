import React from 'react';

export const About = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>About This App</h1>
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
  );
};
