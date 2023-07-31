import { configureStore, createSlice } from "@reduxjs/toolkit";
import userSlice from "./store/userSlice"

const user = createSlice({
    name: "user",
    initialState: { name: "kim", age: 20 },
});


export default configureStore({
    reducer: {
        user: user.reducer,
        userSlice: userSlice.reducer,
    },
});
