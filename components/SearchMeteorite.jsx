import React,{ useState } from "react";

const SearchMeteorite = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <div className="SearchContainer">
            <form onSubmit={handleSearchSubmit}>
                <input
                    className="SearchMeteorite"
                    type="text"
                    placeholder="Search Meteorite..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <div className="SearchButton">
                <button type="submit">Search</button>
                </div>
            </form>
        </div>
    );
};


export default SearchMeteorite;