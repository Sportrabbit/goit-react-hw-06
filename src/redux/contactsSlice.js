import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialContact = {
     contacts: {
            items: [],
        },
     filters: {
            name: "",
        },
};

const contactSlice = createSlice({
    name: "contacts",
    initialState: initialContact,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const index = state.contacts.items.findIndex(
                    (contact) => contact.id === action.payload
                );
                if (index !== -1) {
                    state.contacts.items.splice(index, 1);
                }
            },
        },
    },
});

export const selectContacts = (state) => state.contacts.contacts.items;
export const {addContact, deleteContact} = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;    