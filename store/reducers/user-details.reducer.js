import { createSlice } from '@reduxjs/toolkit';

const initialState = { phoneNo: '', profileDpUrl: '', fullName: ''  }

export const userProfileDetailsSlice = createSlice({ name: 'userProfileDetails', initialState, reducers: { 
    updatePhoneNumber: (state, action) => {
        state.phoneNo = action.payload.phoneNo;
    },
    updateUserProfile: (state, action) => {
        state.profileDpUrl = action.payload.profileDpUrl;
        state.fullName = action.payload.fullName;
    }
 } });

 export const { updatePhoneNumber, updateUserProfile } = userProfileDetailsSlice.actions;
 export default userProfileDetailsSlice.reducer;

