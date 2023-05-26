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

    extraReducers: (builder) => {
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            state.category = action.payload;
            state.status = 'resolved';
        })

        builder.addCase(fetchCategory.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })

        builder.addCase(fetchCategory.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    },
});

export default CategorySlicer.reducer;
        