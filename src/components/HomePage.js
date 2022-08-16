import { useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md'; 

const HomePage = () => {
    const navigate = useNavigate();
    return(
        <div className="homepage">
            <div className="circle" onClick={() => navigate('/addNote')}>
                <div className="plus-sign">
                    <MdAdd className='add-icon' size='10em'/>
                </div>
            </div>
        </div>
    )   
}
export default HomePage;