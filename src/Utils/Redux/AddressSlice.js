import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
  name: 'Address',
  initialState: {
    addressList: [
      {
        id: 0,
        address: {
          flat: 234,
          area: 'prabhupada township',
          building: 'sri tirumala cyber residency',
          LandMark: '',
          isdefault: true,
          type: 'Home',
        },
      },
      {
        id: 1,
        address: {
          flat: 234,
          area: 'prabhupada township',
          building: 'sri tirumala cyber residency',
          LandMark: '',
          isdefault: true,
          type: 'Home',
        },
      },
      {
        id: 2,
        address: {
          flat: 234,
          area: 'prabhupada township',
          building: 'sri tirumala cyber residency',
          LandMark: '',
          isdefault: true,
          type: 'Home',
        },
      }
    ],
    availableIds: [],
    currentId: 0,
    defaultid : 0,
  },
  reducers: {
    addAddress: (state, action) => {
      const address = action.payload;
      let id;
      if (state.availableIds.length === 0) {
        state.currentId += 1;
        id = state.currentId;
      } else {
        id = state.availableIds.pop(); // Reuse an ID
      }
      if(action.payload.isdefault){
        state.defaultid = id;
      }
      state.addressList.push({
        id,
        address,
      });
    },
    removeAddress : (state , action)=>{
        alert('delete Id');
        console.log(action.payload);
        state.addressList = state.addressList.filter(add => action.payload !== add.id);
        state.availableIds.push(action.payload)
      }
  }
  
});

export const { addAddress , removeAddress } = AddressSlice.actions;
export default AddressSlice.reducer;
