import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addContact, deleteContact, fetchContacts} from './operations';

export interface IContacts {
    id?: string,
    name: string,
    phoneNumber: string
}

export interface IInitState {
    contacts: IContacts[],
    isLoading: boolean,
    error: string | null,
}

const contactsInitialState: IInitState = {
    contacts: [],
    isLoading: false,
    error: null,
};

const handlePending = (state: IInitState) => {
    state.isLoading = true;
};
const handleRejected = (state: IInitState, action: any) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(addContact.pending, handlePending)
            .addCase(deleteContact.pending, handlePending)
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.rejected, handleRejected)
            .addCase(fetchContacts.fulfilled, (state: IInitState, action: PayloadAction<IContacts[]>) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(addContact.fulfilled, (state: IInitState, action: PayloadAction<IContacts>) => {
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(deleteContact.fulfilled, (state: IInitState, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = null;
                const index = state.contacts.findIndex(d => d.id === action.payload)
                state.contacts.splice(index, 1);
            })
    }
})
export const contactsReducer = contactsSlice.reducer
