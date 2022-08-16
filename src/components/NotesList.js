 import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import Note from "./Note";

import { useContext } from 'react';
import { NotesContext } from '../App';


const NotesList = () => {
    const {notes, setNotes} = useContext(NotesContext);
    const [searchText, setSearchText] = useState('');
    console.log(searchText)

    const navigate = useNavigate();
    useEffect(() => {
        if (!notes.length) {
            console.log('notes length', notes.length);
            navigate('/dashboard', { replace: true });
        }
    }, [notes, navigate]);
    console.log(notes)

    const handelDelete = (note) => {
        setNotes((data) => data.filter((_, index) => index !== note));
    }

    const filteredNotes = notes.filter((data) => data.text.toLowerCase().includes(searchText.toLocaleLowerCase()));

    return (
        <>
            <SearchBar setSearchText={setSearchText} />
            <div className="notes-list">

                {
                    filteredNotes.map((data, index) => <Note key={index} index={index} data={data} handelDelete={handelDelete} />)
                }
            </div>
        </>
    )
}
export default NotesList;










