import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hp: {
        current: 10,
        max: 10
    }
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        damage: (state, action) => {
            state.hp.current -= action.payload;
        }
    }
});

export const { damage } = playerSlice.actions;

export default playerSlice.reducer;