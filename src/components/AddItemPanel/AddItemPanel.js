import React from 'react';
import './AddItemPanel.css';

const AddItemPanel = ({ addItem }) => {
    return(
        <form method="post" className="add_item_panel d-flex align-items-center">
            <input id="item_title" type="text" placeholder="Type item title..." className="my-3 form-control w-75" />
            <button 
            type="submit"
            id="add_item_btn"
            className="btn btn-info w-25 ml-2"
            onClick={ addItem } >Add item</button>
        </form>
    )
}

export default AddItemPanel;