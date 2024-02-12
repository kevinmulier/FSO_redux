import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import NewNote from './components/NewNote';
import Notes from './components/Notes';
import noteService from './services/notes';
import VisibilityFilter from './components/VisibilityFilter';
import { setNotes } from './reducers/noteReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    noteService.getAll().then((notes) => dispatch(setNotes(notes)));
  }, []);

  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
