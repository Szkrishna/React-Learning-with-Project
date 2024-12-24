import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import { About } from './MyComponents/About';
import { Contact } from './MyComponents/Contact';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  

  const [filteredTodos, setFilteredTodos] = useState(todos);
  const handleSearch = (query) => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filtered);
  };
  
  return (
    <>
      <Router>
        <Header title="My Todo's List" onSearch={handleSearch}/>
        <Routes>
          <Route exact path="/" element={
            <Todos todos={filteredTodos} onDelete={onDelete} />
          } />
          <Route exact path="/about" element={
            <About />
          } />
          <Route exact path="/contact" element={
            <Contact />
          } />
          <Route exact path="/add-todo" element={
            <AddTodo addTodo={addTodo} />
          } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
