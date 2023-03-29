import { createSlice } from "@reduxjs/toolkit";
import postSummary from '../data/post-summary.json';

const postSummarySlice = createSlice({
                                   name: 'posts',
                                   initialState: postSummary
                               });

export default postSummarySlice.reducer;