import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",
    async () => {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/v1/receipt/?format=json"
        );
        return response.data;
    }
);

const initialState = {
    categories: [],
    status: null,
    error: null,
};

const AllCategoriesSlicer = createSlice({
    name: "categories",
    initialState,

    extraReducers: {
        [fetchAllCategories.fulfilled]: (state, action) => {
            state.categories = action.payload;
            state.status = 'resolved';
        },
        [fetchAllCategories.pending]: (state, action) => {
            state.status = 'Loading...';
            state.error = null;
        },


        

    },
});

export default AllCategoriesSlicer.reducer;