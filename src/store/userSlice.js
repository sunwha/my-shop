import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "cart",
    initialState: [
        { id: 0, title: "White and Black", count: 2, price: 120000 },
        { id: 2, title: "Grey Yordan", count: 1, price: 130000 },
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
            let obj = {...action.payload[0]}
            if(state.findIndex((elem) =>  elem.id === obj.id) > -1) {
                let elem = state.find((elem) =>  elem.id === obj.id);
                elem.count += Number(action.payload[1]);
            } else {
                obj.count = Number(action.payload[1]);
                state.push(obj);
            }
        },
        deleteItem(state, action){
            let index = state.findIndex((x) => x.id === action.payload);
            state.splice(index, 1);
        }
    },
});

export const { changeMinus, changePlus, addCart, deleteItem } = userSlice.actions;

export default userSlice;