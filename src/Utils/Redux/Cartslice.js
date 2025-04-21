import {createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    restId: null,
    cartItems: [],
    cartPrice :0
  },
  reducers: {
    addItem: (state, action) => {
      if(state.cartItems.length === 0){
        state.restId = action.payload.restid;
      }
      const {item , restid} = action.payload;
      const incomingId = item.card.info.id;
      const existingItem = state.cartItems.find(item => item.item.card.info.id === incomingId);
      if (existingItem) {
        state.cartItems = state.cartItems.map(item =>
          item.item.card.info.id === incomingId
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        );
      } else {
        state.cartItems.push({
          item,
          Quantity: 1,
        });
      }
      state.cartPrice = state.cartPrice + (item.card.info.price ? item.card.info.price : item.card.info.defaultPrice);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.restId = null;
      state.cartPrice = 0
    },
    removeItem : (state, action)=>{
      if(state.cartItems.length === 1){
        state.cartItems = [];
      state.restId = null;
      state.cartPrice = 0
      }
      else
        {state.cartItems = state.cartItems.filter((item) => item.item.card.info.id !== action.payload.id);
        state.cartPrice = state.cartPrice - action.payload.totalPrice ;}
    },
    increaseItemQunatity: (state, action) => {
      const { id ,price} = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.item.card.info.id === id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );
      state.cartPrice = state.cartPrice + price
    },

    reduceItemQunatity: (state, action) => {
      const { id ,price} = action.payload;
      state.cartItems = state.cartItems
        .map(item => {
          if (item.item.card.info.id === id) {
            if (item.Quantity > 1) {
              return { ...item, Quantity: item.Quantity - 1 };
            }
            return null; // mark for removal
          }
          return item;
        })
        .filter(item => item !== null);
        state.cartPrice = state.cartPrice - price;
        if(state.cartItems.length === 0){
          state.cartItems = [];
          state.restId = null;
          state.cartPrice = 0
        }
    },
  }
});

export const { addItem, increaseItemQunatity, reduceItemQunatity, clearCart , removeItem } = CartSlice.actions;
export default CartSlice.reducer;
