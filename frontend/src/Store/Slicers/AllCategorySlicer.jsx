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

    extraReducers: (builder) => {
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.status = 'resolved';
        })

        builder.addCase(fetchAllCategories.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })

        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    },
});

export default AllCategoriesSlicer.reducer;