import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux"

//Import Components
import Register from "./components/sign-in-and-register/Register.jsx";
import SignIn from "./components/sign-in-and-register/SignIn.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";

// redux import 
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/all-posts" element={<AllPosts />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
