import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  // Routes, 
  // Route 
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <>
      <Router>
        <Header title="My Todo's List" search={true}/>
        <Todos todos={todos} onDelete={onDelete} /> 
        <AddTodo addTodo={addTodo}/>
        {/* <Routes>
          <Route exact path="/" render={() => {
            return (
              <>
                <Todos todos={todos}/>
              </>)
          }}>
          </Route>
        </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
