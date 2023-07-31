import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: "White and Black", count: 2 },
        { id: 2, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        changeMinus(state, action) {
            let index = state.findIndex((x) => x.id === action.payload);
            if (state[index].count > 1) {
                state[index].count -= 1;
            } else {
                alert("Quantity cannot under 1.");
            }
        },
        changePlus(state, action) {
            let index = state.findIndex((x) => x.id === action.payload);
            if (state[index].count < 5) {
                state[index].count += 1;
            } else {
                alert("You can buy until 5.");
            }
        },
        addCart(state, action){
            console.log(action.payload)
            state.push(action.payload)
        }
    },
});

export const { changeMinus, changePlus, addCart } = userSlice.actions;

export default userSlice;