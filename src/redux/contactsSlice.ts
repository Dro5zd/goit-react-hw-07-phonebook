import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';
import {RootState} from './store';

export interface IContacts {
    id: string,
    name: string,
    phoneNumber: string
}

const contactsInitialState: IContacts[] = [{
    id: '',
    name: '',
    phoneNumber: ''
}];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action: PayloadAction<IContacts>) {
                state.push(action.payload);
            },
            prepare(name: string, phoneNumber: string) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        phoneNumber,
                    },
                };
            },
        },

        deleteContact(state, action: PayloadAction<string>) {
                const index = state.findIndex(d => d.id === action.payload)
                state.splice(index, 1);
        }
    }
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer
