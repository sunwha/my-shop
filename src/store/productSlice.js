import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const productSlice = createSlice({
    name: "list",
    initialState: data,
    reducers: {
        addMoreData(state, action) {
            state.push(...action.payload)
        },
    },
});

export const { addMoreData } = productSlice.actions;

export default productSlice;
