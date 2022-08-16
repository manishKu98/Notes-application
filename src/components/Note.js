import { MdDeleteForever } from 'react-icons/md'

const Note = ({ data, handelDelete, index }) => {
    const { text, date } = data;
    return (
        <div className="note">
            <span>{text}</span>
            <div className='note-footer'>
                <small>Added on {date}</small>
                <MdDeleteForever className='delete-icons' size='1.3em' onClick={() => handelDelete(index)}/>
            </div>
        </div>
    )
}
export default Note











// import { MdDeleteForever } from 'react-icons/md'

// const Note = ({ data, handelDelete, index }) => {
//     const { text, date } = data;
//     return (
//         <div className="note">
//             <span>{text}</span>
//             <div className='note-footer'>
//                 <small>Added on {date}</small>
//                 <MdDeleteForever className='delete-icons' size='1.3em' onClick={() => handelDelete(index)}/>
//             </div>
//         </div>
//     )
// }
// export default Note