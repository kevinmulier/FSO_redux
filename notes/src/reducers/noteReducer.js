import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const generateId = () => {
  return (Math.random() * 100000000).toFixed(0);
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      state.push(action.payload);
    },
    toggleImportanceOf(state, action) {
      const id = action.payload.id;
      const noteToChange = state.find((n) => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: action.payload.important,
      };
      return state.map((note) => (note.id !== id ? note : changedNote));
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
