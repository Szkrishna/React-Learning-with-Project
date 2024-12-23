import './App.css';
import { Header } from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { 
  BrowserRouter as Router, 
  // Routes, 
  // Route 
} from "react-router-dom";
import { Todos } from './MyComponents/Todos';

function App() {
  const todos = [
    {
      "sno": 1,
      "title": "Complete Portfolio Website",
      "description": "Finalize the Next.js and Tailwind CSS portfolio project with responsive design."
    },
    {
      "sno": 2,
      "title": "Update LinkedIn Profile",
      "description": "Repost the popcorn and IPL tax discussion post with refined content."
    },
    {
      "sno": 3,
      "title": "Study Angular Validators",
      "description": "Learn how to validate dates in Angular forms effectively, ignoring time for validation."
    },
    {
      "sno": 4,
      "title": "Work on Navigation Styles",
      "description": "Enhance the navigation elements by adding box shadow and border radius."
    },
    {
      "sno": 5,
      "title": "Prepare Instagram Profile",
      "description": "Design and launch a professional Instagram profile to showcase personal and work life."
    }
  ]  
  return (
    <>
      <Router>
        <Header title="My Todo's List" search={true} />
        <Todos todos={todos}/>
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
