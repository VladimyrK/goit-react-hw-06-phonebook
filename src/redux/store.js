import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../components/Contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
