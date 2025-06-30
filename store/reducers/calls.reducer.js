import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { friendId: 6, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-06-28T16:10:00'), isVideoCall: false, todayCallHistoryCount: 2 },
    { friendId: 10, callerType: 'Recent', isIncomingCall: false, isMissedCall: false, callTime: new Date('2025-05-27T14:30:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 7, callerType: 'Recent', isIncomingCall: true, isMissedCall: true, callTime: new Date('2025-05-26T11:20:00'), isVideoCall: true, todayCallHistoryCount: 5 },
    { friendId: 5, callerType: 'Recent', isIncomingCall: true, isMissedCall: true, callTime: new Date('2025-04-25T09:45:00'), isVideoCall: false, todayCallHistoryCount: 3 },
    { friendId: 12, callerType: 'Favourites', isIncomingCall: true, isMissedCall: false, callTime: new Date(), isVideoCall: true, todayCallHistoryCount: 4 },
    { friendId: 15, callerType: 'Recent', isIncomingCall: false, isMissedCall: false, callTime: new Date('2025-04-23T13:15:00'), isVideoCall: false, todayCallHistoryCount: 2 },
    { friendId: 14, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-03-22T19:10:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 4, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-03-21T10:00:00'), isVideoCall: true, todayCallHistoryCount: 0 },
    { friendId: 1, callerType: 'Recent', isIncomingCall: false, isMissedCall: false, callTime: new Date('2025-03-20T20:30:00'), isVideoCall: false, todayCallHistoryCount: 10 },
    { friendId: 2, callerType: 'Recent', isIncomingCall: true, isMissedCall: true, callTime: new Date('2025-02-19T18:25:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 3, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-02-18T14:05:00'), isVideoCall: true, todayCallHistoryCount: 0 },
    { friendId: 6, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-02-17T08:50:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 11, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-01-16T13:00:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 10, callerType: 'Recent', isIncomingCall: false, isMissedCall: false, callTime: new Date('2025-01-15T11:40:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 12, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2024-12-14T16:30:00'), isVideoCall: true, todayCallHistoryCount: 0 },
    { friendId: 8, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-11-13T07:45:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 7, callerType: 'Recent', isIncomingCall: false, isMissedCall: false, callTime: new Date('2025-10-12T10:20:00'), isVideoCall: false, todayCallHistoryCount: 0 },
    { friendId: 5, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-09-11T21:00:00'), isVideoCall: true, todayCallHistoryCount: 3 },
    { friendId: 6, callerType: 'Recent', isIncomingCall: true, isMissedCall: false, callTime: new Date('2025-09-10T12:35:00'), isVideoCall: false, todayCallHistoryCount: 2 },
  ];
  
  
export const callsListReducer = createSlice({ name: 'callsList', initialState, reducers: { 
    updateCallList: (state, action) => {
        state = action.payload;
    }
 } });

 export const { updateCallList } = callsListReducer.actions;
 export default callsListReducer.reducer;

