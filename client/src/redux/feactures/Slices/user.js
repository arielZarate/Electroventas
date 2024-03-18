import { createSlice } from "@reduxjs/toolkit";

//revisar todo

const initialState = {
  currentUser: null,
  isLogged: null,
  isRegistrationSuccessfull: null,
};
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLogged: (state, action) => {
      state.isLogged = action.payload;
    },

    setRegister: (state, action) => {
      state.isRegistrationSuccessfull = action.payload;
    },
  },
});

export const { setCurrentUser, setLogged, setRegister } = userSlice.actions;

export default userSlice.reducer;
