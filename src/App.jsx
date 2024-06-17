import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  const basePath = "https://katewebdev.com/backend/wp-json/wp/v2";

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home basePath={basePath} />} />

          <Route
            path="/projects/:slug"
            element={<Project basePath={basePath} />}
          />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
