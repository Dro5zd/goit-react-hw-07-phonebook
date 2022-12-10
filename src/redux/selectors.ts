import {RootState} from './store';

export const getContacts = (state: RootState) => state.contacts.contacts;
export const getIsLoading = (state: RootState) => state.contacts.isLoading;
export const getError = (state: RootState) => state.contacts.error;
export const getContactFilter = (state: RootState) => state.filter;