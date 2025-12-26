import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./Search.css";

const Search=()=>{
    return(
        <div className="search-container">
             
            <input type="text"
            className="search"
            placeholder="search a album of your choice" />
            <SearchIcon className="search-icon" />
        </div>
        
    )
}

export default Search;