import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Components
import HomePage from "./Components/HomePage";
import Register from "./Components/Register.jsx";
import SignIn from "./Components/SignIn.jsx";
import Profile from "./Components/Profile.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
