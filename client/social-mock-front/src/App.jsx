import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Import Components
import HomePage from "./Components/HomePage";
import Register from "./Components/sign in and register/Register.jsx";
import SignIn from "./Components/sign in and register/SignIn.jsx";
import Profile from "./Components/Profile.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
