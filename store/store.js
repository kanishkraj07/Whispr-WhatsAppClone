import { configureStore } from "@reduxjs/toolkit";
import userProfileDetailsReducer from "./reducers/user-details.reducer";
import friendsListReducer from "./reducers/friends.reducer";
import chatDetailsReducer from "./reducers/chats.reducer";
import  statusListReducer from "./reducers/status.reducer";
import  channelsListReducer from "./reducers/channels.reducer";
import  communitiesListReducer from "./reducers/communities.reducer";
import  callListReducer from "./reducers/calls.reducer";

export const whisprStore = configureStore({
    reducer: {
        userProfileDetails: userProfileDetailsReducer,
        friendsList: friendsListReducer,
        chatsList: chatDetailsReducer,
        statusList: statusListReducer,
        channelsList: channelsListReducer,
        communitiesList: communitiesListReducer,
        callsList: callListReducer
    }
});