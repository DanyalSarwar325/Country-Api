
import './SearchBar.css'
function SearchBar({setQuery}) {
    return ( 
        <div className="SearchContainer">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search For a Country" onChange={(e)=>{
                setQuery(e.target.value);
            }}/>
        </div>
     );
}

export default SearchBar;