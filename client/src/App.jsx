import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Profile from "./components/Profile/Profile.jsx";
import Homepage from "./components/Homepage/Homepage.jsx";
import AllPosts from "./Components/AllPosts/AllPosts.jsx";
import AccountOptions from "./Components/AccountOptions/AccountOptions.jsx";
import AccountCenter from "./Components/AccountCenter/AccountCenter.jsx";
import Saved from "./Components/Saved/Saved.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";

// redux import
import { store } from "./store/index.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/all-posts" element={<AllPosts />} />
          <Route path="/account-options" element={<AccountOptions />} />
          <Route path="/account-center" element={<AccountCenter />} />
          <Route path="/saved" element={<Saved />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
