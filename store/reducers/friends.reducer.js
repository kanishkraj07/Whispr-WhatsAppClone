import { createSlice } from '@reduxjs/toolkit';
import profileDp1 from '@/assets/images/profile/p1.jpg';
import profileDp2 from '@/assets/images/profile/p2.jpg';
import profileDp3 from '@/assets/images/profile/p3.jpg';
import profileDp4 from '@/assets/images/profile/p4.avif';
import profileDp5 from '@/assets/images/profile/p5.jpeg';
import profileDp6 from '@/assets/images/profile/p6.jpg';
import profileDp7 from '@/assets/images/profile/p7.jpg';
import profileDp8 from '@/assets/images/profile/p8.jpg';
import profileDp9 from '@/assets/images/profile/p9.jpg';
import profileDp10 from '@/assets/images/profile/p10.jpg';
import profileDp11 from '@/assets/images/profile/p11.jpg';
import profileDp12 from '@/assets/images/profile/p12.jpg';
import profileDp13 from '@/assets/images/profile/p13.jpg';
import profileDp14 from '@/assets/images/profile/p14.jpg';
import profileDp15 from '@/assets/images/profile/p15.jpg';


const initialState = [
    { friendId: 1, name: 'Donald Duck', profileDP: profileDp1  },
    { friendId: 2, name: 'Lawliet', profileDP:  profileDp2 },
    { friendId: 3, name: 'Monkey D. Luffy', profileDP:  profileDp3 },
    { friendId: 4, name: 'John Doe', profileDP: profileDp4  },
    { friendId: 5, name: 'Mickey Mouse', profileDP:  profileDp5 },
    { friendId: 6, name: 'Doraemon', profileDP:  profileDp6 },
    { friendId: 7, name: 'Nobita', profileDP:  profileDp7 },
    { friendId: 8, name: 'ben tennyson', profileDP:  profileDp8 },
    { friendId: 9, name: 'Shaggy!', profileDP: profileDp9 },
    { friendId: 10, name: 'Tanjiro kamado', profileDP: profileDp10   },
    { friendId: 11, name: 'Zenitsu', profileDP:  profileDp11 },
    { friendId: 12, name: 'Shinchan', profileDP:  profileDp12 },
    { friendId: 13, name: 'Sponge Bob', profileDP:  profileDp13 },
    { friendId: 14, name: 'Light Yagami', profileDP:  profileDp14},
    { friendId: 15, name: 'Roronoa Zoro', profileDP:  profileDp15 },
];

const friendsReducer = createSlice({ 
    name: 'friendsList',
    initialState,
    reducers: {
        updateFriendsList: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { updateFriendsList } = friendsReducer.actions;
export default friendsReducer.reducer;