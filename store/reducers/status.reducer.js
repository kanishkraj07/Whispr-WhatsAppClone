import { createSlice } from '@reduxjs/toolkit';
import status1 from '@/assets/images/status/status1.webp';
import status2 from '@/assets/images/status/status2.webp';
import status3 from '@/assets/images/status/status3.webp';
import status4 from '@/assets/images/status/status4.jpg';
import status5 from '@/assets/images/status/status5.jpg';
import status6 from '@/assets/images/status/status6.avif';
import status7 from '@/assets/images/status/status7.jpg';
import status8 from '@/assets/images/status/status8.avif';
import status9 from '@/assets/images/status/status9.avif';
import status10 from '@/assets/images/status/status10.jpg';


const initialState = [
    { friendId: 9,  statusImgUrl: status9 },
    { friendId: 7,  statusImgUrl: status7  },
    { friendId: 1,  statusImgUrl: status1  },
    { friendId: 8,  statusImgUrl: status8  },
    { friendId: 2,  statusImgUrl: status2  },
    { friendId: 3,  statusImgUrl: status3  },
    { friendId: 4,  statusImgUrl: status4  },
    { friendId: 5,  statusImgUrl: status5 },
    { friendId: 6,  statusImgUrl: status6  },
    { friendId: 10,  statusImgUrl: status10  }
];
 
const statusReducer = createSlice({ 
    name: 'statusList',
    initialState,
    reducers: {
        updateStatusList: (state, action) => {
            state.push(action.payload)
        }
    }
});

export const { updateStatusList } = statusReducer.actions;
export default statusReducer.reducer;