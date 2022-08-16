import { MdSearch } from 'react-icons/md';

const SearchBar = ({ setSearchText }) => {
    return(
        <div className="search-wrap">
            <MdSearch className='search-icon' size='1.3em'/>
            <input onChange={(event) => setSearchText(event.target.value) }   type='text' placeholder='type to search...'/>

        </div>
    )
}
export default SearchBar;




