import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    displayName: "haviv ya habal hod",
    name: "haviv ya habal hod",
    bio: "haviv ya habal hod",
    profileImg: "../../../public/images/profile-image-holder.svg",
    pronouns: "haviv ya habal hod",
    links: "haviv ya habal hod",
    banners: "haviv ya habal hod",
    music: "haviv ya habal hod",
    showThreadsBadge: false,
    gender: "haviv ya habal hod",
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
