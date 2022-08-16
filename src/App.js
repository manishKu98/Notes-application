import AppRoutes from './components/AppRoutes';
import ToggleTheme from './components/ToggleTheme';
import { Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import { createContext, useState, useEffect, useContext } from 'react';

const AddList = () => {
  const location = useLocation();

  const { pathname } = location;
  console.log(pathname)
  if (pathname === '/list') {
    return <Link to='/addNote' className='add-more-btn'>Add List</Link>
  }
  return null;
}

export const NotesContext = createContext();

export const useNoteContext = () => useContext(NotesContext);


function App() {
  console.log('inside App')
  let savedNotes = localStorage.getItem('notes') || [];
  if (savedNotes.length) {
    savedNotes = JSON.parse(savedNotes);
  }
  const [notes, setNotes] = useState(savedNotes);
  console.log(notes)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const toggleTheme = () => {
    const ele = document.getElementById('parent-node');
    ele.classList.toggle('dark-theme');
  }

  return (
    <NotesContext.Provider value={{ notes, setNotes, toggleTheme }}>
      <Router>
        <div id="parent-node">
          <div className='app'>
            <div className='header'>
              <h1 className='app-title'>Notes</h1>
              <div className='top-btns'>
                <AddList />
                <ToggleTheme />
              </div>
            </div>
            <AppRoutes />
          </div>
        </div>
      </Router>
    </NotesContext.Provider>
  );
}

export default App;
