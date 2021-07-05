import cartSlice from "./CartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
})

export default store