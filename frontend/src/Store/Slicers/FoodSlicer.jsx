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
 
    extraReducers: (builder) => {
        builder.addCase(fetchFood.fulfilled, (state, action) => {
            state.food = action.payload;
            state.status = 'resolved';
        })

        builder.addCase(fetchFood.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })

        builder.addCase(fetchFood.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        })
    },
});
export default FoodSlicer.reducer;