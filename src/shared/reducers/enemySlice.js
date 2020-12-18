import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hp: {
        current: 9,
        max: 10
    }
}

const enemySlice = createSlice({
    name: 'enemy',
    initialState,
    reducers: {
        damage: (state, action) => {
            state.hp.current -= action.payload;
        }
    }
});

export const { damage } = enemySlice.actions;

export default enemySlice.reducer;