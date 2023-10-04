import { createSlice } from '@reduxjs/toolkit';

const items =
  localStorage.getItem('contacts') !== null
    ? JSON.parse(localStorage.getItem('contacts'))
    : [];

const initialState = items;

const contacts = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    addContacts: (state, action) => {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },

    deleteContacts: (state, action) => {
      const contact = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(contact));
      return contact;
    },
  },
});

export const { addContacts, deleteContacts } = contacts.actions;
export default contacts.reducer;
