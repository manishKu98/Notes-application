import { useContext } from 'react';
import { NotesContext } from '../App';

function ToggleTheme() {
    const { toggleTheme } = useContext(NotesContext)
    return (
        <div className="toggle">
            <div className="button r" id="button-1">
                <input onChange={() => toggleTheme((prev) => !prev)} type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </div>
    )
}
export default ToggleTheme;
