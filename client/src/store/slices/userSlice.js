import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "חביב יא אהבל חוד",
    name: "חביב יא אהבל חוד",
    bio: "חביב יא אהבל חוד",
    profileImg: "../../../public/images/profile-image-holder.svg",
    pronouns: "חביב יא אהבל חוד",
    links: "חביב יא אהבל חוד",
    banners: "חביב יא אהבל חוד",
    music: "חביב יא אהבל חוד",
    showThreadsBadge: false,
    gender: "חביב יא אהבל חוד",
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    setProfilePicUser: (state, action) => {
      state.profileImg = action.payload;
    },
    setDisplayName: (state, action) => {
      state.displayName = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setPronouns: (state, action) => {
      state.pronouns = action.payload;
    },
    setLinks: (state, action) => {
      state.links = action.payload;
    },
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setMusic: (state, action) => {
      state.music = action.payload;
    },
    setShowThreadsBadge: (state, action) => {
      state.showThreadsBadge = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
  },
});

export const {
  setUser,
  setProfilePicUser,
  setDisplayName,
  setBio,
  setPronouns,
  setLinks,
  setBanners,
  setMusic,
  setShowThreadsBadge,
  setGender,
} = userSlice.actions;

export default userSlice.reducer;
