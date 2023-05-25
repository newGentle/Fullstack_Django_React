import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/fetchCategory",
    async (id) => {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/v1/receipt/${id}/foods/?format=json`
        );
        return response.data;
    }
);

const initialState = {
    category: [],
    status: null,
    error: null,
};

const CategorySlicer = createSlice({
    name: "category",
    initialState,

    extraReducers: {
        [fetchCategory.fulfilled]: (state, action) => {
            state.category = action.payload;
            state.status = 'resolved';
        },
        [fetchCategory.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchCategory.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            
        },
    },
});

export default CategorySlicer.reducer;
        