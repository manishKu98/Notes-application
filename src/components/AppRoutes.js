import {
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import NoList from './NoList';
import AddNote from './AddNote';
import NotesList from './NotesList';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/dashboard' element={<NoList />} />
            <Route path='/addNote' element={<AddNote  />} />
            <Route path='/list' element={<NotesList  />} />
            <Route path='*' element={<Navigate to='/list' replace />} />
        </Routes>
    )
}
export default AppRoutes;