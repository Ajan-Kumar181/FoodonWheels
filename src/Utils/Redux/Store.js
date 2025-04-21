import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice'
import AddressReducer from './AddressSlice'
import PaymentsSlice from "./PaymentsSlice";
const store = configureStore({
    reducer :{
        cart : cartReducer,
        Address : AddressReducer,
        cardSlice : PaymentsSlice
    }
});

export default store;