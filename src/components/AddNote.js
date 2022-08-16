import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useNoteContext } from '../App.js';

const AddNote = () => {
    const { setNotes } = useNoteContext();
    const navigate = useNavigate();
    const [text, setText] = useState('');

    const onChange = (e) => {
        if (e.target.value?.length <= 300) {
            setText(e.target.value);
        }
    }

    const handelSave = () => {
        setNotes((prev) => {
            return [...prev, { text, date: new Date().toLocaleDateString() }];
        });
        setText('');
        navigate('/list');
    }

    const len = text.length;

    return (
        <>
            <div className="note new">
                <textarea
                    rows='12'
                    className="textarea"
                    placeholder='Type to add a note...'
                    value={text}
                    onChange={onChange}
                />
                <div className='note-footer'>
                    <small>Remaining: {300 - len}</small>
                    <button className='save' onClick={handelSave} >Save</button>
                </div>
            </div>
        </>
    )
}
export default AddNote;