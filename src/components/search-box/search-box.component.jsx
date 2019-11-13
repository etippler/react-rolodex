import React from 'react';

import './search-box.styles.css';

// Note the implicit destructuring of the "props" in the below
// functional component's parameters. The argument passed in from the parent
// will generally have these items passed in a single object, and the destructuring
// is used to pull out only the properties we need from the input object.
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
    />
);