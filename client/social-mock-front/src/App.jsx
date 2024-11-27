import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Components
import Register from "./Components/SignIn/Register.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";
import Profile from "./Components/Profile.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
