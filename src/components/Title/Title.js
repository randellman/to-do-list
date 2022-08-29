import React from 'react';

const Title = ({ toDo, done }) => {
    return(
      <div className="title_wrap">
        <h1>To Do App</h1>
        <span>{ toDo } more to do, { done } done</span>
      </div>
    )
};

export default Title;