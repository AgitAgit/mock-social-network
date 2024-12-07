import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    profileImg: "../../../public/images/profile-image-holder.svg",
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload;
    },
    setProfilePicUser: (state, action) => {
      state.profileImg = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export const { setProfilePicUser } = userSlice.actions;
export default userSlice.reducer;
