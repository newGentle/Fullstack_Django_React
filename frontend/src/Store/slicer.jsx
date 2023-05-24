import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchReceipts = createAsyncThunk(
    "receipt/fetchReceipts",
    async () => {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/v1/receipt/?format=json"
        );
        return response.data;
    }
);

export const fetchAReceipt = createAsyncThunk(
    "receipt/fetchAReceipt",
    async (id) => {
        const response = await axios.get(
            `http://127.0.0.1:8000/api/v1/receipt/${id}/foods/?format=json`
        );
        return response.data;
    }
);

const initialState = {
    receipt: [],
    oneReceipt: [],
    status: null,
    item_status: null,
    error: null,
};

const slicer = createSlice({
    name: "receipt",
    initialState,

    extraReducers: {
        [fetchReceipts.fulfilled]: (state, action) => {
            state.receipt = action.payload;
            state.status = 'resolved';
        },
        [fetchReceipts.pending]: (state, action) => {
            state.status = 'Loading...';
            state.error = null;
        },

        
        [fetchAReceipt.fulfilled]: (state, action) => {
            state.oneReceipt = action.payload;
            state.item_status = 'resolved';
        },
        [fetchAReceipt.pending]: (state, action) => {
            state.item_status = 'Loading...';
            state.error = null;
        },
        [fetchAReceipt.rejected]: (state, action) => {
            state.item_status = 'rejected';
            state.error = action.payload;
            
        },
        

    },
});

export default slicer.reducer;
