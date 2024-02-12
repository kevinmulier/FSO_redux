import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      return state.map((note) =>
        note.id !== action.payload.id ? note : action.payload,
      );
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, appendNote, setNotes, toggleImportanceOf } =
  noteSlice.actions;
export default noteSlice.reducer;
