import React from 'react';

import ToDoListItem from '../ToDoListItem';
import AddItemPanel from '../AddItemPanel';
import './toDoList.css';

const ToDoList = ({ compData, onDeleted, addItem, onToggleDone, onToggleImportant }) => { 
  // console.log(props);
  /* console.log('ToDoList==', compData[0]); 

  let deleteItem = (i) => {
    compData.splice(i);
 
    console.log();

    return compData;
  } */

  let toDoListElements = compData.map((item, i) => {
    let {id, ...itemProps} = item;

    return (
      <li key={ id } className="list-group-item">
        <ToDoListItem 
        { ...itemProps } 
        onDeleted={ () => onDeleted(id) } 
        onToggleDone={ () => onToggleDone(id) }
        onToggleImportant={ () => onToggleImportant(id) } />
      </li> 
    );
  });

  return(
    <ul className="list-group to-do-list">
      { toDoListElements }
      <AddItemPanel addItem={ addItem } />
    </ul>
  );
};

export default ToDoList;