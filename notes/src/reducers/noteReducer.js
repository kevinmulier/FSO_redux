import { createSlice } from '@reduxjs/toolkit';
import noteService from '../services/notes';

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
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { createNote, appendNote, setNotes, toggleImportanceOf } =
  noteSlice.actions;

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch(setNotes(notes));
  };
};

export default noteSlice.reducer;
