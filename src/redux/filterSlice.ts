import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterContacts(state, action: PayloadAction<string>){
            return state = action.payload
        }
    }

})
export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer