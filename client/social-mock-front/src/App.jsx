import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Components
import Register from "./components/sign-in-and-register/Register.jsx";
import SignIn from "./components/sign-in-and-register/SignIn.jsx";
import Profile from "./components/Profile.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";

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
