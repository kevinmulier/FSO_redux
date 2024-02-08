import NewNote from './components/NewNote';
import Notes from './components/Notes';
import { toggleImportanceOf } from './reducers/noteReducer';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state);

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id));
  };

  return (
    <div>
      <NewNote />
      <Notes />
    </div>
  );
};

export default App;
