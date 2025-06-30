import { createSlice } from '@reduxjs/toolkit';

import channel1 from '@/assets/images/channels/channel1.jpg';
import channel2 from '@/assets/images/channels/channel2.jpg';
import channel3 from '@/assets/images/channels/channel3.jpg';
import channel4 from '@/assets/images/channels/channel4.avif';
import channel5 from '@/assets/images/channels/channel5.png';
import channel6 from '@/assets/images/channels/channel6.png';
import channel7 from '@/assets/images/channels/channel7.webp';
import channel8 from '@/assets/images/channels/channel8.jpeg';
import channel9 from '@/assets/images/channels/channel9.webp';
import channel10 from '@/assets/images/channels/channel10.jpg';
import channel11 from '@/assets/images/channels/channel11.webp';
import channel12 from '@/assets/images/channels/channel12.webp';
import channel13 from '@/assets/images/channels/channel13.jpg';
import channel14 from '@/assets/images/channels/channel14.webp';
import channel15 from '@/assets/images/channels/channel15.webp';



const initialState = [
    {
      channelId: 1,
      isMember: true,
      name: "Cartoon Network",
      icon: channel1,
      recentMessageDetails: {
        message: "Did you watch the latest Gumball episode?",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T15:19:55.388Z"
      },
      unseenMessagesDetails: { count: 2 }
    },
    {
      channelId: 2,
      isMember: true,
      name: "Pogo",
      icon: channel2,
      recentMessageDetails: {
        message: "New Chhota Bheem movie is out now!",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T15:37:55.388Z"
      },
      unseenMessagesDetails: { count: 3 }
    },
    {
      channelId: 3,
      isMember: true,
      name: "Nickelodeon",
      icon: channel3,
      recentMessageDetails: {
        message: "SpongeBob marathon is live!",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T15:41:55.388Z"
      },
      unseenMessagesDetails: { count: 2 }
    },
    {
      channelId: 4,
      isMember: true,
      name: "Disney Channel",
      icon: channel4,
      recentMessageDetails: {
        message: "Catch the new episode of Mickey Mouse Clubhouse.",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T15:25:55.388Z"
      },
      unseenMessagesDetails: { count: 6 }
    },
    {
      channelId: 5,
      isMember: true,
      name: "Boomerang",
      icon: channel5,
      recentMessageDetails: {
        message: "Old classics are back, don't miss Tom & Jerry!",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T16:13:55.388Z"
      },
      unseenMessagesDetails: { count: 9 }
    },

    {
        channelId: 6,
        isMember: true,
        name: "Discovery Kids",
        icon: channel6,
        recentMessageDetails: {
          message: "Kisna is now streaming every evening.",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T14:50:55.388Z"
        },
        unseenMessagesDetails: { count: 8 }
      },

    {
      channelId: 7,
      isMember: true,
      name: "Animax",
      icon: channel7,
      recentMessageDetails: {
        message: "Next up: Fullmetal Alchemist at 9 PM.",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T15:18:55.388Z"
      },
      unseenMessagesDetails: { count: 0 }
    },
    {
      channelId: 8,
      isMember: true,
      name: "Marvel HQ",
      icon: channel8,
      recentMessageDetails: {
        message: "Spider-Man Unlimited episodes every Friday!",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T16:15:55.388Z"
      },
      unseenMessagesDetails: { count: 8 }
    },
    {
      channelId: 9,
      isMember: true,
      name: "Toonami",
      icon: channel9,
      recentMessageDetails: {
        message: "Dragon Ball Super resumes tomorrow.",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T16:14:55.388Z"
      },
      unseenMessagesDetails: { count: 1 }
    },
    {
      channelId: 10,
      isMember: true,
      name: "Hungama TV",
      icon: channel10,
      recentMessageDetails: {
        message: "Shinchan’s new season is hilarious!",
        sentBy: "FRIEND",
        deliverTime: "2025-06-30T16:06:55.388Z"
      },
      unseenMessagesDetails: { count: 4 }
    },
    {
        channelId: 11,
        isMember: false,
        name: "WhatsApp",
        icon: channel11,
        recentMessageDetails: {
          message: "Stay connected with the latest feature updates!",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T15:34:55.388Z"
        },
        unseenMessagesDetails: { count: 10 },
        followersCount: 1500000
      },
      {
        channelId: 12,
        isMember: false,
        name: "Meta",
        icon: channel12,
        recentMessageDetails: {
          message: "Explore the future of social interaction with Horizon Worlds.",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T16:04:55.388Z"
        },
        unseenMessagesDetails: { count: 7 },
        followersCount: 100000
      },
      {
        channelId: 13,
        isMember: false,
        name: "Amazon",
        icon: channel13,
        recentMessageDetails: {
          message: "Your Prime Day deals are now live!",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T16:28:55.388Z"
        },
        unseenMessagesDetails: { count: 7 },
        followersCount: 750000
      },
      {
        channelId: 14,
        isMember: false,
        name: "Google",
        icon: channel14,
        recentMessageDetails: {
          message: "Your Google Account settings were updated recently.",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T16:20:55.388Z"
        },
        unseenMessagesDetails: { count: 5 },
        followersCount: 65000
      },
      {
        channelId: 15,
        isMember: false,
        name: "YouTube",
        icon: channel15,
        recentMessageDetails: {
          message: "Catch the latest uploads from your favorite creators!",
          sentBy: "FRIEND",
          deliverTime: "2025-06-30T16:00:55.388Z"
        },
        unseenMessagesDetails: { count: 2 },
        followersCount: 256000
      }];
  

export const channelsReducer = createSlice({ name: 'channelsList', initialState, reducers: {
    addChannel: (state, action) => {
        state.push(action.payload);
    }, 
    updateChannels: (state, action) => {
        state = action.payload;
    }
 } });

 export const { addChannel, updateChannels } = channelsReducer.actions;
 export default channelsReducer.reducer;

