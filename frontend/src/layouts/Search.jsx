import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery'
const Search = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigate(`/search?query=${query}`);
            $('.search-model').fadeOut(400, function () {
                $('#search-input').val('');
            });
            setQuery('')
        }
    };

    return (
        <div className="search-model">
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="search-close-switch">+</div>
                <form className="search-model-form">
                    <input
                        type="text"
                        id="search-input"
                        placeholder="Search here....."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </form>
            </div>
        </div>
    );
};

export default Search;
