import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="My Todo's List" search={true} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
