import { createSlice } from "@reduxjs/toolkit";
import profile from '../data/profile.json';


const profileSlice = createSlice({
                                   name: 'profile',
                                   initialState: profile,
                                   reducers: {
                                       editProfile(state, action) {
                                           state.firstName =action.payload.firstName
                                           state.lastName =action.payload.lastName
                                           state.bio = action.payload.bio
                                           state.dateOfBirth = action.payload.dateOfBirth
                                           state.website = action.payload.website
                                           state.handle = action.payload.handle
                                       }}

                               });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;
