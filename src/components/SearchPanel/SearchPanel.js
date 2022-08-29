import React from 'react';

const style = {
    fontSize: '25px',
}

const SearchPanel = () => {
    return(
      <input 
      type="text" 
      placeholder="Search"
      style={ style } />
    )
};

export default SearchPanel;