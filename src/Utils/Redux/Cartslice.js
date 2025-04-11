import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    restId: '1234',
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const incomingId = action.payload.card.info.id;
      const existingItem = state.cartItems.find(item => item.item.card.info.id === incomingId);
      if (existingItem) {
        state.cartItems = state.cartItems.map(item =>
          item.item.card.info.id === incomingId
            ? { ...item, Quantity: item.Quantity + 1 }
            : item
        );
      } else {
        state.cartItems.push({
          item: action.payload,
          Quantity: 1,
        });
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.restId = '';
    },
    removeItem : (state, action)=>{
        state.cartItems = state.cartItems.filter((item) => item.item.card.info.id !== action.payload);
    },
    increaseItemQunatity: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.map(item =>
        item.item.card.info.id === id
          ? { ...item, Quantity: item.Quantity + 1 }
          : item
      );
    },

    reduceItemQunatity: (state, action) => {
      const id = action.payload;
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
    },
  }
});

export const { addItem, increaseItemQunatity, reduceItemQunatity, clearCart , removeItem } = CartSlice.actions;
export default CartSlice.reducer;
