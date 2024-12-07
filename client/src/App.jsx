import "./App.css";
import { store } from "./store/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import AccountOptions from "./Components/AccountOptions/AccountOptions.jsx";
import AccountCenter from "./Components/AccountOptions/AccountCenter/AccountCenter.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import PostsFeed from "./Pages/PostsFeed/PostsFeed.jsx";
import Homepage from "./Pages/Homepage/Homepage.jsx";
import Search from "./Pages/Search/Search.jsx";
import NewPost from "./Pages/NewPost/NewPost.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import ViewPost from "./Components/Post/ViewPost/ViewPost.jsx";
import ComingSoonPage from "./Components/ComingSoonPage/ComingSoonPage.jsx";
import TermsOfService from "./Pages/TermsOfService/TermsOfService.jsx";
import Reels from "./Pages/Reels/Reels.jsx";
import EditProfile from "./Pages/EditProfile/EditProfile.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-post" element={<NewPost />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/view-post/:postId" element={<ViewPost />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts-feed" element={<PostsFeed />} />
          <Route path="/account-options" element={<AccountOptions />} />
          <Route path="/account-center" element={<AccountCenter />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<ComingSoonPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
