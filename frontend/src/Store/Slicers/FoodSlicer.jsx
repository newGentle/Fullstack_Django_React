import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFood = createAsyncThunk(
    "food/fetchFood",
    async (values) => {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/v1/receipt/${values.receipt_id}/foods/${values.id}?format=json`
        );
        return response.data;
    }
);

const initialState = {
    food: [],
    status: null,
    error: null,
    values: [],
};

const FoodSlicer = createSlice({
    name: "food",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchFood.fulfilled]: (state, action) => {
            state.food = action.payload;
            state.status = 'resolved';
        },
        [fetchFood.pending]: (state, action) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchFood.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
            
        },
    },
});
export default FoodSlicer.reducer;