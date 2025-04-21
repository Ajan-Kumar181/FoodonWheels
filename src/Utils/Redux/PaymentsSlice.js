import { createSlice } from "@reduxjs/toolkit";

const PaymentSlice = createSlice({
    name : 'cardSlice',
    initialState : {
       CardsList :[{
        cardId : 1,
        cardNumber : 1008,
        bankName : 'Amex',
        expirydate :'feb 2030'
       },{
        cardId : 2,
        cardNumber : 4748,
        bankName : 'sbi',
        expirydate :'feb 2029'
       },{
        cardId : 3,
        cardNumber : 4562,
        bankName : 'hdfc',
        expirydate :'feb 2050'
       }]
    },
    reducers : {
        deleteCard : (state , action) => {
            console.log(action.payload);
            state.CardsList = state.CardsList.filter( card => card.cardId !== action.payload);
        }

    }
});

export const  { deleteCard } = PaymentSlice.actions;
export default PaymentSlice.reducer;