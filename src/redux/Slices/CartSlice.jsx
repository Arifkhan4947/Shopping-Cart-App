import { createSlice } from "@reduxjs/toolkit"; 


export const CartSlice = createSlice({
    name:"cart",                    // this "cart" name we put on our "Store.jsx" file.
    initialState:{
        items: [],
    },                 
    reducers:{
        add: (state,action) => {
            state.items.push(action.payload);
        },
        remove: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        }
    }
})

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;   
