import { createSlice } from '@reduxjs/toolkit';



const contacts = createSlice({
  name: 'contacts',
  initialState: [],

  reducers: {
    addContacts: (state, action) => {

      return [...state, action.payload];
    },

    deleteContacts: (state, action) => {
      const contact = state.filter(contact => contact.id !== action.payload);

      return contact;
    },
  },
});

export const { addContacts, deleteContacts } = contacts.actions;
export default contacts.reducer;
