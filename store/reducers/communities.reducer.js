 
import { createSlice } from '@reduxjs/toolkit';
import community1 from '@/assets/images/communities/community1.jpg'
import cg1 from '@/assets/images/communities/cg1.jpeg'
import cg2 from '@/assets/images/communities/cg2.webp'
import community2 from '@/assets/images/communities/community2.webp'
import c2g1 from '@/assets/images/communities/c2g1.jpg'
import c2g2 from '@/assets/images/communities/c2g2.jpg'


const initialState = [{
    communityId: 1,
    name: 'Demon Slayer',
    icon: community1,
    type: 'Existing',
    allGroups: [
      {
        name: 'Announcements',
        recentMessageDetails: {
          message: 'Welcome to your community',
          deliverTime: new Date("2025-06-30T14:38:56.205Z"),
        },
        isDefault: true
      },
      {
        name: 'Hashira Council',
        iconUrl: cg1,
        recentMessageDetails: {
          message: '+91 7878787898 addedd +91 8686869089',
          deliverTime: new Date(),
        },
      },
      {
        name: 'Tanjiro’s Squad',
        iconUrl: cg2,
        recentMessageDetails: {
          message: 'Zenitsu is missing again 😩',
          deliverTime: new Date(),
        },
      }
    ]},
    {
        communityId: 2,
        name: 'One Piece',
        icon: community2,
        type: 'Existing',
        allGroups: [
            {
                name: 'Announcements',
                recentMessageDetails: {
                  message: 'Welcome to your community',
                  deliverTime: new Date("2025-06-29T14:38:56.205Z"),
                },
                isDefault: true
              },
          {
            name: 'Straw Hat Association',
            iconUrl: c2g1,
            recentMessageDetails: {
              message: 'Luffy has declared war on the World Government!',
              deliverTime: new Date(),
            },
          },
          {
            name: 'Marine Intel HQ',
            iconUrl: c2g2,
            recentMessageDetails: {
              message: 'Straw Hats spotted near Egghead Island.',
              deliverTime: new Date(),
            },
          }
        ]
      }
      ];
  

export const communitiesReducer = createSlice({ name: 'communitiesList', initialState, reducers: { 
    updateCommunities: (state, action) => {
        state = action.payload;
    }
 } });

 export const { updateCommunities } = communitiesReducer.actions;
 export default communitiesReducer.reducer;

